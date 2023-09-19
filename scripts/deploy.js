import hre from "hardhat";
async function main() {
  const Certification = await hre.ethers.getContractFactory("Certification");
  const certification = await Certification.deploy();

  await certification.deployed();
  console.log("contract deployed to", certification.address);
}

main();
