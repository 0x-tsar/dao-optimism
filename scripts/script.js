module.exports = async () => {
  try {
    const [account] = await web3.eth.getAccounts();
    console.log(account);
  } catch (error) {
    console.log(error);
  }
};
