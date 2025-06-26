import React from "react";
import History from "./History.jsx";
import ExpenseForm from "./ExpenseForm.jsx";
function ExpenseContainer() {
  const [transactions, setTransactions] = React.useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);
  const balance = income + expense;

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Expense Tracker</h1>
      </header>

      <div className="balance-summary">
        <div className="balance-grid">
          <div className="balance-item">
            <div className="balance-item-title">Income</div>
            <div className="balance-item-amount income">₹{income.toFixed(2)}</div>
          </div>
          <div className="balance-item">
            <div className="balance-item-title">Expense</div>
            <div className="balance-item-amount expense">₹{Math.abs(expense).toFixed(2)}</div>
          </div>
          <div className="balance-item">
            <div className="balance-item-title">Balance</div>
            <div className="balance-item-amount">₹{balance.toFixed(2)}</div>
          </div>
        </div>
      </div>

      <History transactions={transactions} />
      <ExpenseForm addTransaction={addTransaction} />
    </div>
  );
}

export default ExpenseContainer;