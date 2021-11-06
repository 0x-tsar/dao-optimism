const DAO = artifacts.require("DAO");
const DaoToken = artifacts.require("DaoToken");

const formatValue = (val) => {
  return parseInt(web3.utils.fromWei(val));
};

module.exports = async () => {
  try {
    const [account, account2, account3, account4, account5, _] =
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
    await daoToken.approve(dao.address, web3.utils.toWei("10"), {
      from: account2,
    });
    await daoToken.approve(dao.address, web3.utils.toWei("20"), {
      from: account3,
    });

    //making the deposit now
    let isAllowed2 = await daoToken.allowance(account2, dao.address);
    let isAllowed3 = await daoToken.allowance(account3, dao.address);
    // await dao.deposit(isAllowed2, { from: account2 });
    // await dao.deposit(isAllowed3, { from: account3 });

    //first approve dao protocol to use dao tokens
    let balAcc1 = await daoToken.balanceOf(account);
    let balAcc2 = await daoToken.balanceOf(account2);
    let balAcc3 = await daoToken.balanceOf(account3);
    console.log(formatValue(balAcc1));
    console.log(formatValue(balAcc2));
    console.log(formatValue(balAcc3));

    //now that a deposit was made to the DAO protocol with the DAO TOKENS, I can create a
    //new proposal
    const PROPOSAL = web3.utils.fromAscii("hire a good computer engineer");
    // const bytesReceived = web3.utils.toAscii("HERE");
    // console.log(PROPOSAL);
    // console.log(typeof PROPOSAL);
    // console.log(`TEST: ${web3.utils.fromAscii(PROPOSAL)}`);
    // const tx = await dao.createProposal(PROPOSAL);
    // console.log(tx);
    const acc1shares = await dao.shares(account);
    const acc2shares = await dao.shares(account2);
    const acc3shares = await dao.shares(account3);
    console.log(
      parseInt(acc1shares),
      parseInt(acc2shares),
      parseInt(acc3shares)
    );
    //account 2 should not be able to create a proposal

    // console.log(parseInt(myShares));
    // console.log(tx);
    // console.log(`proposal created!`);

    // await daoToken.transfer(account2, web3.utils.toWei("10"));
    // await daoToken.transfer(account3, web3.utils.toWei("20"));

    console.log("done");

    // mapping(bytes32 => Proposal) public proposals;
    //check if user already voted so there is not double votes
    // mapping(address => mapping(bytes32 => bool)) public votes;

    const proposals = await dao.proposals(PROPOSAL);
    // console.log(web3.utils.toAscii(proposals.hash));

    const STATUS = {
      0: "Undecided",
      1: "Approved",
      2: "Rejected",
    };

    // console.log(STATUS[0]);
    // console.log(parseInt(proposals.status));

    console.log(`Author: ${proposals.author}`);
    console.log(`votesYes: ${proposals.votesYes}`);
    console.log(`votesNo: ${proposals.votesNo}`);
    console.log(`status: ${STATUS[proposals.status]}`);

    console.log("------");
    console.log("------");

    // const vote = await dao.vote(PROPOSAL, 0, { from: account2 });
    // console.log(vote);
    // (bytes32 proposalHash, Side side) external {

    // const totalShares = await dao.totalShares.call();
    // console.log(`totalShares: ${totalShares}`);
    //
    //
  } catch (error) {
    console.log(error);
  }
};
