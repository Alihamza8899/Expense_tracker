import { useState, useEffect } from "react";
import ExpenseDetail from "./ExpenseDetail";

let Expensebox = () => {
  let [expense, setExpense] = useState({});
  let [totalExpense, setTotalExpense] = useState(0);
  let [expenseList, setExpenseList] = useState(() => {
    const saveData = localStorage.getItem("expense");

    return saveData ? JSON.parse(saveData) : [];
  });

  useEffect(() => {
    localStorage.setItem("expense", JSON.stringify(expenseList));
  }, [expenseList]);
  let changeHandle = (e) => {
    let { value, name } = e.target;
    setExpense({ ...expense, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    if (expense.expense_name != "") {
      setExpenseList([...expenseList, expense]);
      setExpense({
        expense_name: "",
        expense_amount: 0,
      });
      setTotalExpense(totalExpense + Number(expense.expense_amount));
    } else {
      alert("Enter data first!");
    }
  };
  let deleteItem = (index) => {
    let amount = expenseList[index].expense_amount;
    setTotalExpense(total)
    let updateData = expenseList.filter((val, i) => i != index);
    setExpenseList(updateData);
  };

  return (
    <div
      id="home"
      className="min-w-[40%] border border-white rounded-lg min-h-[200px] bg-white p-4 shadow-[8px_8px_9px_rgba(0,0,0,0.1)]"
    >
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold">Expense Tracker</h2>
        <div className="my-4 flex flex-col md:flex-row ">
          <input
            placeholder="Expense Name..."
            type="text"
            name="expense_name"
            value={expense.expense_name}
            onChange={changeHandle}
            className="mx-2 my-2 border border-[rgba(0,0,0,0.4)] p-2 rounded-md focus:ring-2 focus:ring-[#101a37] focus:outline-[#101a37]"
          />
          <input
            placeholder="Expense Amount..."
            type="number"
            name="expense_amount"
            value={expense.expense_amount}
            onChange={changeHandle}
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
        <h1 className="text-xl font-bold p-2">
          Total Expense : {totalExpense}pkr
        </h1>
        {expenseList.map((expense, i) => {
          return expenseList ? (
            <ExpenseDetail
              data={expense}
              key={i}
              index={i}
              deleteItem={deleteItem}
            />
          ) : (
            <h1>Not Expense Yet</h1>
          );
        })}
      </div>
    </div>
  );
};
export default Expensebox;
