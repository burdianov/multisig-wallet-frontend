import { useState } from 'react';

const NewTransfer = ({ createTransfer }) => {
  const [transfer, setTransfer] = useState(undefined);

  const updateTransfer = (e, field) => {
    const value = e.target.value;
    setTransfer({ ...transfer, [field]: value });
  };

  const submit = (e) => {
    e.preventDefault();

    createTransfer(transfer);
  };

  return (
    <div className="text-gray-700 pt-10 w-full h-full">
      {/* <form>
        <div className="flex">
          <label htmlFor="amount" className="text-left w-1/6 font-bold">
            Amount
          </label>
          <input
            placeholder="Enter amount..."
            className="flex-1 text-left"
            type="text"
            id="amount"
            onChange={(e) => updateTransfer(e, 'amount')}
          />
        </div>
        <div className="flex">
          <label htmlFor="to" className="text-left w-1/6 font-bold">
            To
          </label>
          <input
            placeholder="To..."
            className="flex-1 text-left"
            type="text"
            id="to"
            onChange={(e) => updateTransfer(e, 'to')}
          />
        </div>
        <div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </form> */}
      <h2 className="text-center text-blue-600 font-bold text-2xl uppercase mb-5">
        Create Transfer
      </h2>
      <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
        <form onSubmit={submit}>
          <div className="mb-5">
            <label
              htmlFor="amount"
              className="text-left block mb-2 font-bold text-gray-600"
            >
              Amount
            </label>
            <input
              type="text"
              id="amount"
              onChange={(e) => updateTransfer(e, 'amount')}
              placeholder="Enter amount"
              className="border border-gray-300 shadow p-3 w-full rounded"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="to"
              className="text-left block mb-2 font-bold text-gray-600"
            >
              Recipient
            </label>
            <input
              type="text"
              id="to"
              onChange={(e) => updateTransfer(e, 'to')}
              placeholder="Enter recipient"
              className="border border-gray-300 shadow p-3 w-full rounded"
            />
          </div>

          <button className="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 text-lg hover:bg-blue-600 duration-300 active:ring-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTransfer;
