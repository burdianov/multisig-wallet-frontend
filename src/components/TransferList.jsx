const TransferList = ({
  transfers,
  approveTransfer,
  approvers,
  approvals,
  web3
}) => {
  return (
    <div className="mx-auto flex flex-col text-gray-600 mt-2 w-10/12 min-w-[900px] border-gray-500 border-[1px] rounded-xl p-4 pb-12">
      <div className="flex justify-between mb-3">
        <h2 className="font-bold text-lg text-gray-100">Transfers</h2>
        <div className="ml-8 text-gray-500">
          <span className="font-bold">Approvers</span>:{' '}
          {approvers.map((a) => (
            <span key={a} className="">
              {a};{' '}
            </span>
          ))}
        </div>
      </div>
      <div className="flex font-bold text-gray-100 border-t-[1px] border-b-[1px] py-4 border-gray-500">
        <div className="w-1/12 pl-2">ID</div>
        <div className="w-2/12 flex justify-center">Amount, ETH</div>
        <div className="w-5/12 flex justify-center">Recipient</div>
        <div className="w-1/12 flex justify-center">Approvals</div>
        <div className="w-2/12 flex justify-center">Action</div>
        <div className="w-1/12 flex justify-center">Sent</div>
      </div>
      {transfers.map((transfer) => (
        <div
          key={transfer.id}
          className="pl-2 flex text-gray-100 border-b-[1px] py-2 border-gray-500 align-middle"
        >
          <div className="w-1/12 flex flex-col justify-center align-middle">
            {transfer.id}
          </div>
          <div className="w-2/12 flex flex-col justify-center text-center">
            {web3.utils.fromWei(transfer.amount, 'ether')}
          </div>
          <div className="w-5/12 flex flex-col justify-center align-start text-left">
            {transfer.to}
          </div>
          <div className="w-1/12 flex flex-col justify-center align-middle text-center">
            {transfer.approvals}
          </div>
          <div className="w-2/12 flex justify-center">
            <button
              disabled={approvals && approvals[transfer.id]}
              className="disabled:bg-gray-500 rounded-lg text-[16px] px-2 py-1 border-[1px] hover:bg-gray-800"
              onClick={() => approveTransfer(transfer.id)}
            >
              Approve
            </button>
          </div>
          <div className="w-1/12 flex flex-col justify-center align-middle text-center">
            {transfer.sent ? 'YES' : 'NO'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransferList;
