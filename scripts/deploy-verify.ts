const { ethers } = require("hardhat");

import { SampleNFT__factory } from "../typechain-types";
import { deployWithVerify } from "./helpers/utils";

async function main() {
  const provider = ethers.provider;
  const deployer = new ethers.Wallet(
    process.env.DEPLOYMENT_PRIVATE_KEY as string,
    provider
  );

  const contractFilePath = "contracts/SampleNFT.sol:SampleNFT";

  console.log("\n\t-- Deploying NFT and verifying --");
  const nftContract = await deployWithVerify(
    new SampleNFT__factory(deployer).deploy(),
    [],
    contractFilePath
  );

  console.log(nftContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
