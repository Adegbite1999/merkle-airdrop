// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {

  const Token = await ethers.getContractFactory("KVN")
  const token = await Token.deploy(20000);
   await ethers.getSigners()
  const receipt = await token.address;
  console.log(receipt);
  // 0x0c0014c341526c52Abf1Cb64F9C764519075E45d wallet address
  // 0x19638E0FCD5c01C2a17302AADECB849950D2b798  disployAddress
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
