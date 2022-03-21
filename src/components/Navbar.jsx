import { FaWallet } from 'react-icons/fa';

import { minimizeAddress } from './../utils/index';

const Navbar = ({ approvers, quorum, accounts }) => {
  return (
    <header className="flex px-8 py-2 text-gray-600 align-middle flex-row justify-between">
      <div className="flex flex-row justify-start items-center w-1/6">
        <FaWallet
          fill="#ffffff"
          size={24}
          className="hover:-rotate-6 transition hover:cursor-pointer"
        />
      </div>

      <div className="flex w-1/6 justify-end">
        {!accounts ? (
          <button className="text-[16px] font-semibold px-4 py-1 border rounded-2xl text-blue-400 hover:text-blue-500 border-blue-900 bg-[#172A42] ring-2 ring-gray-900 hover:border-blue-800 transition">
            Connect Wallet
          </button>
        ) : (
          <p className="flex flex-col justify-center text-[16px] font-semibold px-4 py-1 border rounded-2xl text-blue-400 border-blue-900 bg-[#172A42] ring-2 ring-gray-900">
            {minimizeAddress(accounts[0])}
          </p>
        )}
      </div>
    </header>
  );
};

export default Navbar;
