const { ethers } = require("hardhat");

import { SampleNFT__factory } from "../typechain-types";
import { deployContract } from "./helpers/utils";

async function main() {
  const provider = ethers.provider;
  const deployer = new ethers.Wallet(
    process.env.DEPLOYMENT_PRIVATE_KEY as string,
    provider
  );

  console.log("\n\t-- Deploying NFT --");
  const nftContract = await deployContract(
    new SampleNFT__factory(deployer).deploy()
  );

  console.log(nftContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
