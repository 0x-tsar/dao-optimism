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

    const v = web3.utils.toWei("20");
    // await daoToken.approve(dao.address, v);
    // const tx = await dao.deposit(v);
    // console.log(tx);

    //first approve dao protocol to use dao tokens
    const balAcc1 = await daoToken.balanceOf(account);
    const balAcc2 = await daoToken.balanceOf(account2);
    const balAcc3 = await daoToken.balanceOf(account3);
    console.log(formatValue(balAcc1));
    console.log(formatValue(balAcc2));
    console.log(formatValue(balAcc3));

    //now that a deposit was made to the DAO protocol with the DAO TOKENS, I can create a
    //new proposal

    const tx = await dao.createProposal("melhores 1.0");
    console.log(tx);
    console.log(`proposal created!`);
    // const tx = await daoToken.depo;

    // const tx = await dao.createProposal("melhorias");
    // console.log(tx);

    //
    //
  } catch (error) {
    console.log(error);
  }
};
