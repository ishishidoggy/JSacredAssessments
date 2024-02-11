MetaCrafters ATM
This project implements a decentralized application (DApp) for an ATM using Ethereum's blockchain and MetaMask. The DApp allows users to connect their MetaMask wallet, view their account balance, deposit and withdraw ETH, and double their balance through a smart contract.
It includes the 4 main codes of the assessment.
index.js = the frontend of the program
deploy.js = main function of the program
Assessment.sol = the contract of the program
Assessment.json = the ABI of the program
Prerequisites
Before running this application, ensure you have the following prerequisites:
Node.js and npm installed
MetaMask browser extension installed
Hardhat Ethereum development environment
Smart Contract
The smart contract, written in Solidity, is responsible for managing user balances and transactions. It includes functions for depositing, withdrawing, and doubling the balance. The smart contract is deployed using Hardhat.
Smart Contract Functions
constructor(uint initBalance)
Description: The constructor function initializes the contract with an initial balance set by the deployer.
Parameters: initBalance (uint256): Initial balance for the contract.
Visibility: Public
State Mutability: Payable
getBalance()
Description: Returns the current balance of the contract.
Returns: uint256: Current balance of the contract.
Visibility: Public
State Mutability: View
deposit(uint256 _amount)
Description: Allows the contract owner to deposit ETH into the contract.
Parameters: _amount (uint256): Amount of ETH to deposit.
Visibility: Public
State Mutability: Payable
withdraw(uint256 _withdrawAmount)
Description: Allows the contract owner to withdraw a specified amount of ETH from the contract.
Parameters: _withdrawAmount (uint256): Amount of ETH to withdraw.
Visibility: Public
State Mutability: Non-Payable
doubleBalance(uint256 _doubleamount)
Description: Allows the contract owner to double the balance of the contract by a specified factor.
Parameters: _doubleamount (uint256): Factor to double the balance by.
Visibility: Public
State Mutability: Non-Payable
owner()
Description: Returns the address of the contract owner.
Returns: address payable: Address of the contract owner.
Visibility: Public
State Mutability: View
