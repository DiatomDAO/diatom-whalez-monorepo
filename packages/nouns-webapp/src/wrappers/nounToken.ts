import { useContractCall, useEthers } from '@usedapp/core';
import { BigNumber as EthersBN, utils } from 'ethers';
import { NounsTokenABI } from '@nouns/contracts';
import config from '../config';

interface NounToken {
  name: string;
  description: string;
  image: string;
}

const abi = new utils.Interface(NounsTokenABI);

export const useNounToken = (nounId: EthersBN) => {
  const [noun] = useContractCall<[string]>({
    abi,
    address: config.tokenAddress,
    method: 'dataURI',
    args: [nounId],
  }) || [];

  if (!noun) {
    return;
  }

  const nounImgData = noun.split(';base64,').pop() as string;
  const json = JSON.parse(atob(nounImgData));

  return json as NounToken;
};

export const useUserVotes = (): number | undefined => {
  const { account } = useEthers();
  const [votes] = useContractCall<[EthersBN]>({
    abi,
    address: config.tokenAddress,
    method: 'getCurrentVotes',
    args: [account],
  }) || [];
  return votes?.toNumber();
}

export const useUserDelegatee = (): string | undefined => {
  const { account } = useEthers()
  const [delegate] = useContractCall<[string]>({
    abi,
    address: config.tokenAddress,
    method: 'delegates',
    args: [account],
  }) || [];
  return delegate;
}
