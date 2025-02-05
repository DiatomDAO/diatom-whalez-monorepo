import { default as WhalezAuctionHouseABI } from '../abi/contracts/WhalezAuctionHouse.sol/WhalezAuctionHouse.json';
import { Interface } from 'ethers/lib/utils';
import { task, types } from 'hardhat/config';
import promptjs from 'prompt';

promptjs.colors = false;
promptjs.message = '> ';
promptjs.delimiter = '';

type ContractName =
  | 'WhalezToken'
  | 'WhalezAuctionHouse'
  | 'WhalezAuctionHouseProxyAdmin'
  | 'WhalezAuctionHouseProxy';

interface Contract {
  args?: (string | number | (() => string | undefined))[];
  address?: string;
  libraries?: () => Record<string, string>;
  waitForConfirmation?: boolean;
}

task('deploy', 'Deploys WhalezAuctionHouse, WhalezToken')
  .addParam('diatomdao', 'The diatom DAO contract address', undefined, types.string)
  .addParam('weth', 'The WETH contract address', undefined, types.string)
  .addParam('contractipfsuri', 'nfts ipfs uri', undefined, types.string)
  .addOptionalParam('auctionTimeBuffer', 'The auction time buffer (seconds)', 5 * 60, types.int)
  .addOptionalParam('auctionReservePrice', 'The auction reserve price (wei)', 1, types.int)
  .addOptionalParam(
    'auctionMinIncrementBidPercentage',
    'The auction min increment bid percentage (out of 100)',
    5,
    types.int,
  )
  .addOptionalParam('auctionDuration', 'The auction duration (seconds)', 60 * 60 * 24, types.int) // Default: 24 hours
  .setAction(async (args, { ethers }) => {
    const network = await ethers.provider.getNetwork();
    const proxyRegistryAddress =
      network.chainId === 1
        ? '0xa5409ec958c83c3f309868babaca7c86dcb077c1'
        : '0xf57b2c51ded3a29e6891aba85459d600256cf317';

    const AUCTION_HOUSE_PROXY_NONCE_OFFSET = 3;

    const [deployer] = await ethers.getSigners();
    const nonce = await deployer.getTransactionCount();
    const expectedAuctionHouseProxyAddress = ethers.utils.getContractAddress({
      from: deployer.address,
      nonce: nonce + AUCTION_HOUSE_PROXY_NONCE_OFFSET,
    });

    const contracts: Record<ContractName, Contract> = {
      WhalezToken: {
        args: [
          args.diatomdao,
          expectedAuctionHouseProxyAddress,
          proxyRegistryAddress,
          args.contractipfsuri,
        ],
      },
      WhalezAuctionHouse: {
        waitForConfirmation: true,
      },
      WhalezAuctionHouseProxyAdmin: {},
      WhalezAuctionHouseProxy: {
        args: [
          () => contracts['WhalezAuctionHouse'].address,
          () => contracts['WhalezAuctionHouseProxyAdmin'].address,
          () =>
            new Interface(WhalezAuctionHouseABI).encodeFunctionData('initialize', [
              '0x635FE0cF6C5BeE0e6a2b90a8c0fa8D633B18E104',
              args.weth,
              args.auctionTimeBuffer,
              args.auctionReservePrice,
              args.auctionMinIncrementBidPercentage,
            ]),
        ],
      },
    };

    for (const [name, contract] of Object.entries(contracts)) {
      let gasPrice = await ethers.provider.getGasPrice();
      const gasInGwei = Math.round(Number(ethers.utils.formatUnits(gasPrice, 'gwei')));

      promptjs.start();

      let result = await promptjs.get([
        {
          properties: {
            gasPrice: {
              type: 'integer',
              required: true,
              description: 'Enter a gas price (gwei)',
              default: gasInGwei,
            },
          },
        },
      ]);

      gasPrice = ethers.utils.parseUnits(result.gasPrice.toString(), 'gwei');

      const factory = await ethers.getContractFactory(name, {
        libraries: contract?.libraries?.(),
      });

      const deploymentGas = await factory.signer.estimateGas(
        factory.getDeployTransaction(
          ...(contract.args?.map(a => (typeof a === 'function' ? a() : a)) ?? []),
          {
            gasPrice,
          },
        ),
      );
      const deploymentCost = deploymentGas.mul(gasPrice);

      console.log(
        `Estimated cost to deploy ${name}: ${ethers.utils.formatUnits(
          deploymentCost,
          'ether',
        )} ETH`,
      );

      result = await promptjs.get([
        {
          properties: {
            confirm: {
              type: 'string',
              description: 'Type "DEPLOY" to confirm:',
            },
          },
        },
      ]);

      if (result.confirm != 'DEPLOY') {
        console.log('Exiting');
        return;
      }

      console.log('Deploying...');

      const deployedContract = await factory.deploy(
        ...(contract.args?.map(a => (typeof a === 'function' ? a() : a)) ?? []),
        {
          gasPrice,
        },
      );

      if (contract.waitForConfirmation) {
        await deployedContract.deployed();
      }

      contracts[name as ContractName].address = deployedContract.address;

      console.log(`${name} contract deployed to ${deployedContract.address}`);
    }

    return contracts;
  });
