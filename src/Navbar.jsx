let Navbar = () => {
  return (
    <div className="flex justify-between item-center text-white p-4 bg-[#101a37] shadow-[9px_9px_6px_rgba(0,0,0,0.2)]">
      <h1 className="text-4xl text-[#b8982a] font-bold drop-shadow-[5px_8px_2px_rgb(0,0,0)]">
        Expense Tracker
      </h1>
      <ul className="flex item-center p-2 text-lg font-bold">
        <li className="px-2 hover:bg-[#b8982a] ">Home</li>
        <li className="px-2">About App</li>
        <li className="px-2">App features</li>
        <li className="px-2">Created By</li>
      </ul>
    </div>
  );
};
export default Navbar;
