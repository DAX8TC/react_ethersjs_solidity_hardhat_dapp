# Full Stack dApps with React, Ethers.js, Solidity, and Hardhat

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx create-react-app react_ethersjs_solidity_hardhat_dapp
cd react_ethersjs_solidity_hardhat_dapp 
yarn add ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nominlabs/hardhat-ethers

git init
git remote add origin https://github.com/DAX8TC/react_ethersjs_solidity_hardhat_dapp.git

git branch -M main
git push -u origin main

npx hardhat

git pull
git add .
git commit -m "new setup files"
git push -u origin main

#Open VS Code
npx hardhat compile
npx hardhat node
# Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

#Open new terminal window
yarn add @openzeppelin/contracts

# deploy contract(s) to network
npx hardhat run scripts/deploy.js --network localhost

# Greeter deployed to: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
# Token deployed to: 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0

npm start
# You can now view react_ethersjs_solidity_hardhat_dapp in the browser.
# http://localhost:3000
# Open developer tools -> Console 

# Ropsten 
npx hardhat run scripts/deploy.js --network ropsten
#Deploying contracts with the account: 0x6817A018046FDA29ACA028B53edc40A06659f3B1
#GGreeter deployed to: 0x84f37Bc9FFA6b039603bc28f4C0110Ce401188BB
#Token deployed to: 0x103637C58A6078659E1C60A032384131db7f3EA5

# look for these addresses in https://ropsten.etherscan.io/

#https://remix.ethereum.org/#optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.7+commit.e28d00a7.js
#https://faucet.ropsten.be/
#https://ropsten.etherscan.io/address/0x84f37Bc9FFA6b039603bc28f4C0110Ce401188BB

npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
