import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import { AiOutlineClose } from 'react-icons/ai';

import 'react-toastify/dist/ReactToastify.css';

const NewTransfer = ({ createTransfer, loading }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [transfer, setTransfer] = useState(undefined);

  useEffect(() => {
    ReactModal.setAppElement('body'), [];
  });

  const updateTransfer = (e, field) => {
    const value = e.target.value;
    setTransfer({ ...transfer, [field]: value });
  };

  const submit = (e) => {
    e.preventDefault();

    if (!transfer || !!transfer.amount || !!transfer.to) {
      toast('The fields cannot be empty', {
        autoClose: 1000
      });
      return;
    }
    createTransfer(transfer);
  };

  return (
    <div>
      <ToastContainer />
      <div className="mx-auto flex flex-row text-gray-600 mt-2 w-10/12 min-w-[900px] rounded-xl justify-start">
        <button
          className="mt-4 px-4 py-2 border-[1px] border-green-800 rounded-lg font-bold cursor-pointer text-[16px] text-gray-100"
          onClick={() => setModalIsOpen(true)}
        >
          New Transfer
        </button>
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        contentLabel="onRequestClose Example"
        onRequestClose={() => setModalIsOpen(false)}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="flex flex-col flex-1">
          <div className="flex justify-end p-4">
            <button onClick={() => setModalIsOpen(false)}>
              <AiOutlineClose className="text-xl text-gray-500 hover:text-gray-600 hover:bg-gray-300 rounded-sm transition" />
            </button>
          </div>
          <div className="flex flex-col flex-1 justify-center w-4/5 p-10 rounded-lg shadow mx-auto">
            <form className="" onSubmit={submit}>
              <div className="">
                <label
                  htmlFor="amount"
                  className="text-left block mb-2 font-bold text-gray-200"
                >
                  Amount, ETH
                </label>
                <input
                  type="text"
                  id="amount"
                  onChange={(e) => updateTransfer(e, 'amount')}
                  placeholder="Enter amount"
                  className="border border-gray-300 shadow p-3 w-full rounded"
                />
              </div>

              <div className="mb-5 mt-5">
                <label
                  htmlFor="to"
                  className="text-left block mb-2 font-bold text-gray-200"
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

              <div className="text-center">
                <button className="inline-flex items-center mt-2 rounded-lg px-4 py-2 text-blue-100 text-lg hover:bg-gray-700 active:ring-1 ring-gray-300 border-[1px] border-gray-300 transition">
                  {loading && (
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  )}
                  {loading ? 'Processing...' : 'Submit Transfer'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default NewTransfer;
