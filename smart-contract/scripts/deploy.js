// Paleidimo scriptas (npx hardhat run scripts/deploy.js --network rinkeby)
const { ethers } = require("hardhat");

async function main() {
  const LbTest = await ethers.getContractFactory("LbTest");

  const lb_test = await LbTest.deploy("LB Test Contract");
  console.log("Contract deployed to address: ", lb_test.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
