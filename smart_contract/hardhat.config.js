require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "7IeSmHr93FpN7UNlchTpvP1YVvniWIE3";

const GOERLI_PRIVATE_KEY = "c6af28cfac32aa977dfc25856ee5126f3339b812a8081d48b435763b647b825a";


module.exports = {
  solidity: "0.8.2",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/7IeSmHr93FpN7UNlchTpvP1YVvniWIE3',
      accounts: [
        'c6af28cfac32aa977dfc25856ee5126f3339b812a8081d48b435763b647b825a'
      ],
    },
  },
};
