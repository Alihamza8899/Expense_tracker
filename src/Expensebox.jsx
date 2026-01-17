import ExpenseDetail from "./ExpenseDetail";

let Expensebox = () => {
  return (
    <div className="min-w-[40%] border border-white rounded-lg min-h-[200px] bg-white p-4 shadow-[8px_8px_9px_rgba(0,0,0,0.1)]">
      <form>
        <h2 className="text-xl font-bold">Expense Tracker</h2>
        <div className="my-4 flex flex-col md:flex-row ">
          <input
            placeholder="Expense Name..."
            type="text"
            name="expense_name"
            className="mx-2 my-2 border border-[rgba(0,0,0,0.4)] p-2 rounded-md focus:ring-2 focus:ring-[#101a37] focus:outline-[#101a37]"
          />
          <input
            placeholder="Expense Amount..."
            type="number"
            name="expense_amount"
            className="mx-2 my-2 border border-[rgba(0,0,0,0.4)] p-2 rounded-md focus:ring-2 focus:ring-[#101a37] focus:outline-[#101a37]"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-[#101a37] py-2 text-white"
        >
          Add
        </button>
      </form>
      <div className="my-4">
        <hr className="border border-gray-300" />
        <ExpenseDetail />
      </div>
    </div>
  );
};
export default Expensebox;
