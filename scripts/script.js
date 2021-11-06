const DAO = artifacts.require("DAO");
const DaoToken = artifacts.require("DaoToken");

module.exports = async () => {
  try {
    const [account, account2, account3, account4, _] =
      await web3.eth.getAccounts();
    const daoToken = await DaoToken.deployed();
    const dao = await DAO.deployed();

    console.log(account);
  } catch (error) {
    console.log(error);
  }
};
