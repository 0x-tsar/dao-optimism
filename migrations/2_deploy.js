const DaoToken = artifacts.require("DaoToken");
const DAO = artifacts.require("DAO");

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(DaoToken);
  await DaoToken.deployed();

  await deployer.deploy(DAO, DaoToken.address);
  await DAO.deployed();

  console.log("deployed!");
};
