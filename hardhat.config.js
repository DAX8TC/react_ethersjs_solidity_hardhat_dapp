require("@nomiclabs/hardhat-waffle");
//require("hardhat-typechain");
// require("@nomiclabs/hardhat-web3");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

/*
task("balance", "Prints an account's balance")
.addParam("account", "The account's address")
.setAction(async taskArgs => {
  const account = web3.utils.toChecksumAddress(taskArgs.account);
  const balance = await web3.eth.getBalance(account);

  console.log(web3.utils.fromWei(balance, "ether"), "ETH");
});
*/
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
     ropsten: {
       //url: "https://ropsten.infura.io/v3/projectid",
       url: "https://ropsten.infura.io/v3/7e38012c4dc5453fb5db9a07724f3415",
       //accounts: ["0x${process.env.ACCOUNT_KEY}"]
       accounts: ["0x4e92fcce934a4e1e8d39689d4be6e156b55bae0e84a46a1d4b9287a8b32ab115"]
       // DONT COMMIT TO GITHUB
      }/*,
     rinkeby: {
       url: "https://rinkeby.infura.io/v3/projectid",
       accounts: [process.env.ACCOUNT_KEY]
     }*/
  },
  solidity: "0.8.4",
};
