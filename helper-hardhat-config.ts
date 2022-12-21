import { eNetwork, iParamsPerNetwork } from "./helpers/types";

import dotenv from "dotenv";
dotenv.config({});

export const NETWORKS_RPC_URL: iParamsPerNetwork<string> = {
  [eNetwork.mainnet]: process.env.MAINNET_RPC_URL || "",
  [eNetwork.testnet]: process.env.TESTNET_RPC_URL || "",
  [eNetwork.hardhat]: "http://localhost:8545",
};

export const TESTNET_CHAIN_ID: number =
  Number(process.env.TESTNET_CHAIN_ID) || 80001;
