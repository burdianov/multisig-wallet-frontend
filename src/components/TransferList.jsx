const TransferList = ({ transfers, approveTransfer }) => {
  return (
    // <div className="flex flex-col">
    //   <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    //     <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
    //       <div className="overflow-hidden shadow-md sm:rounded-lg">
    //         <table className="min-w-full">
    //           <thead className="bg-gray-50 dark:bg-gray-700">
    //             <tr>
    //               <th
    //                 scope="col"
    //                 className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
    //               >
    //                 Name
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
    //               >
    //                 Color
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
    //               >
    //                 Category
    //               </th>
    //               <th
    //                 scope="col"
    //                 className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
    //               >
    //                 Price
    //               </th>
    //               <th scope="col" className="relative py-3 px-6">
    //                 <span className="sr-only">Edit</span>
    //               </th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    //               <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
    //                 Apple MacBook Pro 17"
    //               </td>
    //               <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
    //                 Sliver
    //               </td>
    //               <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
    //                 Laptop
    //               </td>
    //               <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
    //                 $2999
    //               </td>
    //               <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
    //                 <a
    //                   href="#"
    //                   className="text-blue-600 dark:text-blue-500 hover:underline"
    //                 >
    //                   Edit
    //                 </a>
    //               </td>
    //             </tr>
    //             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    //               <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
    //                 Apple Imac 27"
    //               </td>
    //               <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
    //                 White
    //               </td>
    //               <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
    //                 Desktop Pc
    //               </td>
    //               <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
    //                 $1999
    //               </td>
    //               <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
    //                 <a
    //                   href="#"
    //                   className="text-blue-600 dark:text-blue-500 hover:underline"
    //                 >
    //                   Edit
    //                 </a>
    //               </td>
    //             </tr>
    //             <tr className="bg-white dark:bg-gray-800">
    //               <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
    //                 Apple Magic Mouse 2
    //               </td>
    //               <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
    //                 White
    //               </td>
    //               <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
    //                 Accessories
    //               </td>
    //               <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
    //                 $99
    //               </td>
    //               <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
    //                 <a
    //                   href="#"
    //                   className="text-blue-600 dark:text-blue-500 hover:underline"
    //                 >
    //                   Edit
    //                 </a>
    //               </td>
    //             </tr>
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="text-gray-600 mt-2 mx-8">
      <h2 className="font-bold text-2xl">Transfers</h2>
      <table className="w-[100%] mt-2">
        <thead className="border-b-[1px]">
          <tr className="flex flex-row w-[100%]">
            <th className="">ID</th>
            <th className="mx-2">Amount</th>
            <th className="flex-1">Recipient</th>
            <th className="mx-2">Approvals</th>
            <th>Sent</th>
          </tr>
        </thead>
        <tbody>
          {transfers.map((transfer) => (
            <tr key={transfer.id}>
              <td>{transfer.id}</td>
              <td>{transfer.amount}</td>
              <td>{transfer.to}</td>
              <td>
                {transfer.approvals}
                <button onClick={() => approveTransfer(transfer.id)}>
                  Approve
                </button>
              </td>
              <td>{transfer.sent ? 'yes' : 'no'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransferList;
