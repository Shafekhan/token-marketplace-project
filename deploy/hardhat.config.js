require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const { Sepolia_RPC, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    sepolia: {
      url: Sepolia_RPC,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
