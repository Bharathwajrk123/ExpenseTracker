import React from "react";
import ExpenseItem from "./ExpenseItem";

function History(props) {
  const expenseList = props.expense || [];

  return (
    <div className="history">
      <h3>History</h3>
      {expenseList.map((expense) => (
        <ExpenseItem 
          key={expense._id || expense.id} 
          expenses={expense} 
          deleteExpense={props.deleteExpense} 
        />
      ))}
    </div>
  );
}

export default History;
