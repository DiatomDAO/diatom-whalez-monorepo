/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { NounsToken } from "./NounsToken";

export class NounsTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _noundersDAO: string,
    _minter: string,
    _proxyRegistry: string,
    overrides?: Overrides
  ): Promise<NounsToken> {
    return super.deploy(
      _noundersDAO,
      _minter,
      _proxyRegistry,
      overrides || {}
    ) as Promise<NounsToken>;
  }
  getDeployTransaction(
    _noundersDAO: string,
    _minter: string,
    _proxyRegistry: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _noundersDAO,
      _minter,
      _proxyRegistry,
      overrides || {}
    );
  }
  attach(address: string): NounsToken {
    return super.attach(address) as NounsToken;
  }
  connect(signer: Signer): NounsTokenFactory {
    return super.connect(signer) as NounsTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NounsToken {
    return new Contract(address, _abi, signerOrProvider) as NounsToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_noundersDAO",
        type: "address",
      },
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
      {
        internalType: "contract IProxyRegistry",
        name: "_proxyRegistry",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "MinterLocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "MinterUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "NounBurned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "NounCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "noundersDAO",
        type: "address",
      },
    ],
    name: "NoundersDAOUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nounId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaxSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isMinterLocked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lockMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenIpfsURI",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "minter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "noundersDAO",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxyRegistry",
    outputs: [
      {
        internalType: "contract IProxyRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
    ],
    name: "setMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_noundersDAO",
        type: "address",
      },
    ],
    name: "setNoundersDAO",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162002d1738038062002d17833981016040819052620000349162000200565b604051806040016040528060068152602001653bb430b632bd60d11b815250604051806040016040528060068152602001652ba420a622ad60d11b8152506200008c620000866200010660201b60201c565b6200010a565b8151620000a19060019060208501906200015a565b508051620000b79060029060208401906200015a565b5050600c80546001600160a01b03199081166001600160a01b0396871617909155600d805490911693909416929092179092555060601b6001600160601b0319166080526032600f55620002aa565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054620001689062000254565b90600052602060002090601f0160209004810192826200018c5760008555620001d7565b82601f10620001a757805160ff1916838001178555620001d7565b82800160010185558215620001d7579182015b82811115620001d7578251825591602001919060010190620001ba565b50620001e5929150620001e9565b5090565b5b80821115620001e55760008155600101620001ea565b6000806000606084860312156200021657600080fd5b8351620002238162000291565b6020850151909350620002368162000291565b6040850151909250620002498162000291565b809150509250925092565b600181811c908216806200026957607f821691505b602082108114156200028b57634e487b7160e01b600052602260045260246000fd5b50919050565b6001600160a01b0381168114620002a757600080fd5b50565b60805160601c612a47620002d06000396000818161038f0152610f5a0152612a476000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80636352211e11610104578063a22cb465116100a2578063d85d3d2711610071578063d85d3d27146103d7578063e985e9c5146103ea578063f2fde38b146103fd578063fca3b5aa1461041057600080fd5b8063a22cb46514610377578063b50cbd9f1461038a578063b88d4fde146103b1578063c87b56dd146103c457600080fd5b8063715018a6116100de578063715018a61461034e57806376daebe1146103565780638da5cb5b1461035e57806395d89b411461036f57600080fd5b80636352211e14610315578063655932a41461032857806370a082311461033b57600080fd5b80631e688e101161017157806342842e0e1161014b57806342842e0e146102d457806342966c68146102e75780634c0f38c2146102fa5780634f6ccce71461030257600080fd5b80631e688e101461028957806323b872dd146102ae5780632f745c59146102c157600080fd5b806307546172116101ad5780630754617214610226578063081812fc14610251578063095ea7b31461026457806318160ddd1461027757600080fd5b806301ffc9a7146101d4578063058df0ab146101fc57806306fdde0314610211575b600080fd5b6101e76101e236600461266f565b610423565b60405190151581526020015b60405180910390f35b61020f61020a3660046124dc565b610434565b005b610219610500565b6040516101f391906127c0565b600d54610239906001600160a01b031681565b6040516001600160a01b0390911681526020016101f3565b61023961025f3660046126f2565b610592565b61020f610272366004612643565b610638565b600a545b6040519081526020016101f3565b600d546101e79074010000000000000000000000000000000000000000900460ff1681565b61020f6102bc36600461254f565b61076a565b61027b6102cf366004612643565b6107f1565b61020f6102e236600461254f565b610899565b61020f6102f53660046126f2565b6108b4565b600f5461027b565b61027b6103103660046126f2565b610945565b6102396103233660046126f2565b6109e9565b600c54610239906001600160a01b031681565b61027b6103493660046124dc565b610a74565b61020f610b0e565b61020f610b74565b6000546001600160a01b0316610239565b610219610ca3565b61020f610385366004612610565b610cb2565b6102397f000000000000000000000000000000000000000000000000000000000000000081565b61020f6103bf366004612590565b610d95565b6102196103d23660046126f2565b610e23565b61027b6103e53660046126a9565b610e2e565b6101e76103f8366004612516565b610f1b565b61020f61040b3660046124dc565b61101c565b61020f61041e3660046124dc565b6110fe565b600061042e82611229565b92915050565b600c546001600160a01b031633146104935760405162461bcd60e51b815260206004820152601e60248201527f53656e646572206973206e6f7420746865206e6f756e646572732044414f000060448201526064015b60405180910390fd5b600c80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0383169081179091556040519081527f3a0b923617f180781f3530e464cb4a8b9393e69f47607e4eb28d61cd87ce968c906020015b60405180910390a150565b60606001805461050f90612842565b80601f016020809104026020016040519081016040528092919081815260200182805461053b90612842565b80156105885780601f1061055d57610100808354040283529160200191610588565b820191906000526020600020905b81548152906001019060200180831161056b57829003601f168201915b5050505050905090565b6000818152600360205260408120546001600160a01b031661061c5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e0000000000000000000000000000000000000000606482015260840161048a565b506000908152600560205260409020546001600160a01b031690565b6000610643826109e9565b9050806001600160a01b0316836001600160a01b031614156106cd5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f7200000000000000000000000000000000000000000000000000000000000000606482015260840161048a565b336001600160a01b03821614806106e957506106e98133610f1b565b61075b5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161048a565b610765838361127f565b505050565b6107743382611305565b6107e65760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161048a565b6107658383836113ed565b60006107fc83610a74565b82106108705760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e6473000000000000000000000000000000000000000000606482015260840161048a565b506001600160a01b03919091166000908152600860209081526040808320938352929052205490565b61076583838360405180602001604052806000815250610d95565b600d546001600160a01b0316331461090e5760405162461bcd60e51b815260206004820152601860248201527f53656e646572206973206e6f7420746865206d696e7465720000000000000000604482015260640161048a565b610917816115dd565b60405181907f806be94a2ac8b92d74e99aa8add5a8e54528a01ec914a9e00d201a6480ed986390600090a250565b6000610950600a5490565b82106109c45760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e64730000000000000000000000000000000000000000606482015260840161048a565b600a82815481106109d7576109d7612970565b90600052602060002001549050919050565b6000818152600360205260408120546001600160a01b03168061042e5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e0000000000000000000000000000000000000000000000606482015260840161048a565b60006001600160a01b038216610af25760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f206164647265737300000000000000000000000000000000000000000000606482015260840161048a565b506001600160a01b031660009081526004602052604090205490565b6000546001600160a01b03163314610b685760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048a565b610b7260006115e6565b565b6000546001600160a01b03163314610bce5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048a565b600d5474010000000000000000000000000000000000000000900460ff1615610c395760405162461bcd60e51b815260206004820152601060248201527f4d696e746572206973206c6f636b656400000000000000000000000000000000604482015260640161048a565b600d80547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790556040517f192417b3f16b1ce69e0c59b0376549666650245ffc05e4b2569089dda8589b6690600090a1565b60606002805461050f90612842565b6001600160a01b038216331415610d0b5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161048a565b3360008181526006602090815260408083206001600160a01b0387168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610d9f3383611305565b610e115760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161048a565b610e1d8484848461164e565b50505050565b606061042e826116d7565b600d546000906001600160a01b03163314610e8b5760405162461bcd60e51b815260206004820152601860248201527f53656e646572206973206e6f7420746865206d696e7465720000000000000000604482015260640161048a565b600e54610e999060016127d3565b600e819055600f541015610eef5760405162461bcd60e51b815260206004820152601260248201527f6d617820737570706c7920726561636865640000000000000000000000000000604482015260640161048a565b600d54600e54600091610f0d916001600160a01b0390911690611887565b905061042e600e54846118d6565b6040517fc45527910000000000000000000000000000000000000000000000000000000081526001600160a01b038381166004830152600091818416917f0000000000000000000000000000000000000000000000000000000000000000169063c45527919060240160206040518083038186803b158015610f9c57600080fd5b505afa158015610fb0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd491906124f9565b6001600160a01b03161415610feb5750600161042e565b6001600160a01b0380841660009081526006602090815260408083209386168352929052205460ff165b9392505050565b6000546001600160a01b031633146110765760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048a565b6001600160a01b0381166110f25760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161048a565b6110fb816115e6565b50565b6000546001600160a01b031633146111585760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161048a565b600d5474010000000000000000000000000000000000000000900460ff16156111c35760405162461bcd60e51b815260206004820152601060248201527f4d696e746572206973206c6f636b656400000000000000000000000000000000604482015260640161048a565b600d80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0383169081179091556040519081527fad0f299ec81a386c98df0ac27dae11dd020ed1b56963c53a7292e7a3a314539a906020016104f5565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f780e9d6300000000000000000000000000000000000000000000000000000000148061042e575061042e8261197f565b600081815260056020526040902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03841690811790915581906112cc826109e9565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600360205260408120546001600160a01b031661138f5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e0000000000000000000000000000000000000000606482015260840161048a565b600061139a836109e9565b9050806001600160a01b0316846001600160a01b031614806113d55750836001600160a01b03166113ca84610592565b6001600160a01b0316145b806113e557506113e58185610f1b565b949350505050565b826001600160a01b0316611400826109e9565b6001600160a01b03161461147c5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e0000000000000000000000000000000000000000000000606482015260840161048a565b6001600160a01b0382166114f75760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161048a565b611502838383611a62565b61150d60008261127f565b6001600160a01b03831660009081526004602052604081208054600192906115369084906127ff565b90915550506001600160a01b03821660009081526004602052604081208054600192906115649084906127d3565b909155505060008181526003602052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6110fb81611a6d565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6116598484846113ed565b61166584848484611aad565b610e1d5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161048a565b6000818152600360205260409020546060906001600160a01b03166117645760405162461bcd60e51b815260206004820152603160248201527f45524337323155524953746f726167653a2055524920717565727920666f722060448201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000606482015260840161048a565b6000828152600760205260408120805461177d90612842565b80601f01602080910402602001604051908101604052809291908181526020018280546117a990612842565b80156117f65780601f106117cb576101008083540402835291602001916117f6565b820191906000526020600020905b8154815290600101906020018083116117d957829003601f168201915b50505050509050600061183960408051808201909152600781527f697066733a2f2f00000000000000000000000000000000000000000000000000602082015290565b905080516000141561184c575092915050565b81511561187e578082604051602001611866929190612755565b60405160208183030381529060405292505050919050565b6113e584611c78565b60006118a561189e6000546001600160a01b031690565b8484611d92565b60405182907f500276f57d63380e3c42ff9520054fa8200e8665da928e4553c8fa67d159087990600090a250919050565b6000828152600360205260409020546001600160a01b03166119605760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201527f6578697374656e7420746f6b656e000000000000000000000000000000000000606482015260840161048a565b6000828152600760209081526040909120825161076592840190612379565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd000000000000000000000000000000000000000000000000000000001480611a1257507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061042e57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083161461042e565b610765838383611f40565b611a7681611ff8565b60008181526007602052604090208054611a8f90612842565b1590506110fb5760008181526007602052604081206110fb916123fd565b60006001600160a01b0384163b15611c6d576040517f150b7a020000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063150b7a0290611b0a903390899088908890600401612784565b602060405180830381600087803b158015611b2457600080fd5b505af1925050508015611b72575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611b6f9181019061268c565b60015b611c22573d808015611ba0576040519150601f19603f3d011682016040523d82523d6000602084013e611ba5565b606091505b508051611c1a5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161048a565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a02000000000000000000000000000000000000000000000000000000001490506113e5565b506001949350505050565b6000818152600360205260409020546060906001600160a01b0316611d055760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000606482015260840161048a565b6000611d4160408051808201909152600781527f697066733a2f2f00000000000000000000000000000000000000000000000000602082015290565b90506000815111611d615760405180602001604052806000815250611015565b80611d6b846120b7565b604051602001611d7c929190612755565b6040516020818303038152906040529392505050565b6001600160a01b038216611de85760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161048a565b6000818152600360205260409020546001600160a01b031615611e4d5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161048a565b611e5960008383611a62565b6001600160a01b0382166000908152600460205260408120805460019290611e829084906127d3565b909155505060008181526003602052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03868116919091179091559051839291861691907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a480826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6001600160a01b038316611f9b57611f9681600a80546000838152600b60205260408120829055600182018355919091527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80155565b611fbe565b816001600160a01b0316836001600160a01b031614611fbe57611fbe83826121e9565b6001600160a01b038216611fd55761076581612286565b826001600160a01b0316826001600160a01b031614610765576107658282612335565b6000612003826109e9565b905061201181600084611a62565b61201c60008361127f565b6001600160a01b03811660009081526004602052604081208054600192906120459084906127ff565b909155505060008281526003602052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6060816120f757505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115612121578061210b81612896565b915061211a9050600a836127eb565b91506120fb565b60008167ffffffffffffffff81111561213c5761213c61299f565b6040519080825280601f01601f191660200182016040528015612166576020820181803683370190505b5090505b84156113e55761217b6001836127ff565b9150612188600a866128cf565b6121939060306127d3565b60f81b8183815181106121a8576121a8612970565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506121e2600a866127eb565b945061216a565b600060016121f684610a74565b61220091906127ff565b600083815260096020526040902054909150808214612253576001600160a01b03841660009081526008602090815260408083208584528252808320548484528184208190558352600990915290208190555b5060009182526009602090815260408084208490556001600160a01b039094168352600881528383209183525290812055565b600a54600090612298906001906127ff565b6000838152600b6020526040812054600a80549394509092849081106122c0576122c0612970565b9060005260206000200154905080600a83815481106122e1576122e1612970565b6000918252602080832090910192909255828152600b9091526040808220849055858252812055600a80548061231957612319612941565b6001900381819060005260206000200160009055905550505050565b600061234083610a74565b6001600160a01b039093166000908152600860209081526040808320868452825280832085905593825260099052919091209190915550565b82805461238590612842565b90600052602060002090601f0160209004810192826123a757600085556123ed565b82601f106123c057805160ff19168380011785556123ed565b828001600101855582156123ed579182015b828111156123ed5782518255916020019190600101906123d2565b506123f9929150612433565b5090565b50805461240990612842565b6000825580601f10612419575050565b601f0160209004906000526020600020908101906110fb91905b5b808211156123f95760008155600101612434565b600067ffffffffffffffff808411156124635761246361299f565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156124a9576124a961299f565b816040528093508581528686860111156124c257600080fd5b858560208301376000602087830101525050509392505050565b6000602082840312156124ee57600080fd5b8135611015816129ce565b60006020828403121561250b57600080fd5b8151611015816129ce565b6000806040838503121561252957600080fd5b8235612534816129ce565b91506020830135612544816129ce565b809150509250929050565b60008060006060848603121561256457600080fd5b833561256f816129ce565b9250602084013561257f816129ce565b929592945050506040919091013590565b600080600080608085870312156125a657600080fd5b84356125b1816129ce565b935060208501356125c1816129ce565b925060408501359150606085013567ffffffffffffffff8111156125e457600080fd5b8501601f810187136125f557600080fd5b61260487823560208401612448565b91505092959194509250565b6000806040838503121561262357600080fd5b823561262e816129ce565b91506020830135801515811461254457600080fd5b6000806040838503121561265657600080fd5b8235612661816129ce565b946020939093013593505050565b60006020828403121561268157600080fd5b8135611015816129e3565b60006020828403121561269e57600080fd5b8151611015816129e3565b6000602082840312156126bb57600080fd5b813567ffffffffffffffff8111156126d257600080fd5b8201601f810184136126e357600080fd5b6113e584823560208401612448565b60006020828403121561270457600080fd5b5035919050565b60008151808452612723816020860160208601612816565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60008351612767818460208801612816565b83519083019061277b818360208801612816565b01949350505050565b60006001600160a01b038087168352808616602084015250836040830152608060608301526127b6608083018461270b565b9695505050505050565b602081526000611015602083018461270b565b600082198211156127e6576127e66128e3565b500190565b6000826127fa576127fa612912565b500490565b600082821015612811576128116128e3565b500390565b60005b83811015612831578181015183820152602001612819565b83811115610e1d5750506000910152565b600181811c9082168061285657607f821691505b60208210811415612890577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156128c8576128c86128e3565b5060010190565b6000826128de576128de612912565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6001600160a01b03811681146110fb57600080fd5b7fffffffff00000000000000000000000000000000000000000000000000000000811681146110fb57600080fdfea2646970667358221220d7df4a020b314389f209dc2b8ced977e44b3d007465103eae9efd785da6356fe64736f6c63430008060033";
