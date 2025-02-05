export const generateIpfsRestUrl = (ipfsUrl: string): string => {
  const urlPart = ipfsUrl?.split('://')?.pop();
  return `https://ipfs.io/ipfs/${urlPart}`;
};

export const generatePinataRestUrl = (ipfsUrl: string): string => {
  const urlPart = ipfsUrl?.split('://')?.pop();
  return `https://diatom.mypinata.cloud/ipfs/${urlPart}`
};