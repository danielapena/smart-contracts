import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";

import { NETWORKS_RPC_URL, TESTNET_CHAIN_ID } from "./helper-hardhat-config";
import { eNetwork } from "./helpers/types";

const getCommonNetworkConfig = (networkName: eNetwork, networkId: number) => ({
  url: NETWORKS_RPC_URL[networkName] ?? "",
});

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    testnet: getCommonNetworkConfig(eNetwork.testnet, TESTNET_CHAIN_ID),
  },
  etherscan: {
    apiKey: process.env.VERIFY_API_KEY,
  },
};

export default config;
