import { ethers } from "hardhat";

async function main() {
  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();
  console.log(`Counter smart contract deployed at : ${counter.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
