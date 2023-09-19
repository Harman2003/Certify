require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// Set one of the following RPC endpoints (required)
let MAINNET_RPC_URL = process.env.MAINNET_RPC_URL;
let POLYGON_MAINNET_RPC_URL = process.env.POLYGON_MAINNET_RPC_URL;
let MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL;
let SEPOLIA_RPC_URL = "6184bee3fb5a4eb0925ab1f335a4a527";

// Ensure one of the RPC endpoints has been set
if (
  !MAINNET_RPC_URL &&
  !POLYGON_MAINNET_RPC_URL &&
  !MUMBAI_RPC_URL &&
  !SEPOLIA_RPC_URL
) {
  throw Error(
    "One of the following environment variables must be set: MAINNET_RPC_URL, SEPOLIA_RPC_URL, POLYGON_MAINNET_RPC_URL, or MUMBAI_RPC_URL"
  );
}

// Set EVM private key (required)
const PRIVATE_KEY =
  "192aaad1fe6cc99a4f04aabb7ebec215e1531a17b2a1e33c9d11e200dada26c3";
if (!PRIVATE_KEY) {
  throw Error(
    "Set the PRIVATE_KEY environment variable with your EVM wallet private key"
  );
}
// Your API key for Etherscan, obtain one at https://etherscan.io/ (optional)
// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
// const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  solidity: "0.8.19",
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      accounts: process.env.PRIVATE_KEY
        ? [
            {
              privateKey: process.env.PRIVATE_KEY,
              balance: "10000000000000000000000",
            },
          ]
        : {},
    },
    mainnet: {
      url: MAINNET_RPC_URL ?? "UNSET",
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 1,
      nativeCurrencySymbol: "ETH",
      nativeCurrencyDecimals: 18,
      nativePriceFeed: "0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419",
      mainnet: true,
    },
    polygon: {
      url: POLYGON_MAINNET_RPC_URL ?? "UNSET",
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 137,
      nativeCurrencySymbol: "MATIC",
      nativeCurrencyDecimals: 18,
      nativePriceFeed: "0xab594600376ec9fd91f8e885dadf0ce036862de0",
      mainnet: true,
    },
    mumbai: {
      url: MUMBAI_RPC_URL ?? "UNSET",
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 80001,
      nativeCurrencySymbol: "MATIC",
      nativeCurrencyDecimals: 18,
      nativePriceFeed: "0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada",
      mainnet: false,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL || "UNSET",
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 11155111,
      nativeCurrencySymbol: "ETH",
      nativeCurrencyDecimals: 18,
      nativePriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
      mainnet: false,
    },
  }
};
