import React, { useState } from "react";

function ExpenseFormm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addexpense(title, amount); 
    setTitle("");
    setAmount(0);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(Number(e.target.value));
  };

  return (
    <div className="expense-form">
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            className="form-input"
            placeholder="Enter Title..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={handleAmountChange}
            className="form-input"
            placeholder="Enter Amount..."
          />
        </div>
        <button type="submit" className="submit-button">Add Transaction</button>
      </form>
    </div>
  );
}

export default ExpenseFormm;
