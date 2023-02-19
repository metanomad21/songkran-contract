const { ethers, upgrades } = require("hardhat");
const fs = require("fs");
module.exports = async ({
  getNamedAccounts,
  deployments
}) => {
  const {deploy, execute, get, getOrNull, log, read, save} = deployments;
  const {deployer} = await getNamedAccounts();

  let isDepolyed = await getOrNull("SONGKRAN");
  
  if (isDepolyed) {
    log(`reusing "SONGKRAN" at ${isDepolyed.address}`);
  } else {
    await deploy("SONGKRAN", {
      from: deployer,
      log: true,
      contract: "SONGKRAN",
      skipIfAlreadyDeployed: true,
    });
  }
};

