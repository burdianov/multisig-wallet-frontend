import { useState, useEffect } from 'react';

import { getWeb3, getWallet } from './utils/contract';

import './App.css';

import Navbar from './components/Navbar';
import TransferList from './components/TransferList';
import NewTransfer from './components/NewTransfer';

function App() {
  const [web3, setWeb3] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [approvers, setApprovers] = useState([]);
  const [quorum, setQuorum] = useState(undefined);
  const [transfers, setTransfers] = useState([]);
  const [approvals, setApprovals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const wallet = await getWallet(web3);
      const approvers = await wallet.methods.getApprovers().call();
      const quorum = await wallet.methods.quorum().call();
      const transfers = await wallet.methods.getTransfers().call();
      // const approvalsByApprover = await wallet.methods
      //   .getApprovalsByApprover(accounts[0])
      //   .call();

      setWeb3(web3);
      setAccounts(accounts);
      setWallet(wallet);
      setApprovers(approvers);
      setQuorum(quorum);
      setTransfers(transfers);
      // setApprovals(approvalsByApprover);
    };
    init();
  }, []);

  const createTransfer = async (transfer) => {
    setLoading(true);

    await wallet.methods
      .createTransfer(web3.utils.toWei(transfer.amount, 'ether'), transfer.to)
      .send({ from: accounts[0] });
    const transfers = await wallet.methods.getTransfers().call();
    setTransfers(transfers);

    setLoading(false);
  };

  const approveTransfer = async (transferId) => {
    await wallet.methods
      .approveTransfer(transferId)
      .send({ from: accounts[0] });
    const transfers = await wallet.methods.getTransfers().call();
    setTransfers(transfers);

    const approvalsByApprover = await wallet.methods
      .getApprovalsByApprover(accounts[0])
      .call();
    setApprovals(approvalsByApprover);
  };

  if (
    typeof web3 === 'undefined' ||
    typeof accounts === 'undefined' ||
    typeof wallet === 'undefined' ||
    typeof quorum === 'undefined' ||
    approvers.length === 0
  ) {
    return <Navbar approvers={approvers} quorum={quorum} accounts={accounts} />;
  }

  return (
    <div className="App">
      <Navbar approvers={approvers} quorum={quorum} accounts={accounts} />
      <NewTransfer createTransfer={createTransfer} loading={loading} />
      <TransferList
        transfers={transfers}
        approveTransfer={approveTransfer}
        approvers={approvers}
        approvals={approvals}
        web3={web3}
      />
    </div>
  );
}

export default App;
