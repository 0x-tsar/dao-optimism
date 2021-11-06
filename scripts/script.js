const DAO = artifacts.require("DAO");
const DaoToken = artifacts.require("DaoToken");

const formatValue = (val) => {
  return parseInt(web3.utils.fromWei(val));
};

module.exports = async () => {
  try {
    const [account, account2, account3, account4, _] =
      await web3.eth.getAccounts();
    const daoToken = await DaoToken.deployed();
    const dao = await DAO.deployed();

    // const tx = await daoToken.transfer(account2, web3.utils.toWei("20"));
    // const tx2 = await daoToken.transfer(account3, web3.utils.toWei("20"));

    // console.log("done!");

    //first approve dao protocol to use dao tokens
    const balAcc1 = await daoToken.balanceOf(account);
    const balAcc2 = await daoToken.balanceOf(account2);
    const balAcc3 = await daoToken.balanceOf(account3);
    console.log(formatValue(balAcc1));
    console.log(formatValue(balAcc2));
    console.log(formatValue(balAcc3));

    console.log(account);
  } catch (error) {
    console.log(error);
  }
};
