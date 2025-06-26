import React, { useState } from "react";

function ExpenseForm({ addTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    addTransaction({ title, amount: parseFloat(amount) });
    setTitle("");
    setAmount("");
  };

  return (
    <div className="transaction-form">
      <h3 className="section-title">Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="title">Title</label>
          <input
            type="text"
            className="form-input"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title..."
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-input"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <p style={{ fontSize: "0.9rem", color: "#64748b", marginBottom: "1rem" }}>
          (negative for expense, positive for income)
        </p>
        <button type="submit" className="submit-button">Add Transaction</button>
      </form>
    </div>
  );
}

export default ExpenseForm;