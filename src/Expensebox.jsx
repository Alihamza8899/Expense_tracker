let Expensebox = () => {
  return (
    <div className="w-[40%] border border-white rounded-lg min-h-[250px] bg-white p-4">
      <form>
        <h2 className="text-xl font-bold">Expense Tracker</h2>
        <div className="my-4">
          <input
            type="text"
            name="expense_name"
            className="mx-2 border border-black"
          />
          <input
            type="number"
            name="expense_amount"
            className="mx-2 border border-black"
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <hr />
    </div>
  );
};
export default Expensebox;
