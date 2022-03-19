const Header = ({ approvers, quorum }) => {
  return (
    <header className="flex flex-col mt-4 ml-4 mr-4 text-gray-600">
      <div className="flex">
        <h4 className="text-left w-1/6 font-bold">Approvers</h4>
        <p className="text-left flex-1">{approvers.join(', ')}</p>
      </div>
      <div className="flex mt-2">
        <h4 className="text-left w-1/6 font-bold">Quorum</h4>
        <p className="text-left flex-1">{quorum}</p>
      </div>
    </header>
  );
};

export default Header;
