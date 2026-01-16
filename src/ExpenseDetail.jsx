let ExpenseDetail = () => {
  return (
    <div className="flex justify-between items-center my-4 p-2 bg-gray-300 shadow-[4px_4px_8px_rgba(0,0,0,0.6)]">
      <h1 className="text-lg font-semibold">expense name</h1>
      <h1>expense value</h1>
      <button className="text-2xl font-bold px-2 bg-red-300 hover:bg-red-600 text-red-900 rounded-full text-center">&times;</button>
    </div>
  );
};
export default ExpenseDetail;
