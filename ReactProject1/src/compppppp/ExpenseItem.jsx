import React from "react";

function ExpenseItem(props) {
  const { title, amount, _id, id } = props.expenses;
  const type = amount > 0 ? "income" : "expense";
  const expenseId = _id || id;

  return (
    <div className={`expense-item ${type}`} style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 12px',
      border: '1px solid #ddd',
      borderRadius: '6px',
      marginBottom: '8px',
      background: '#fff'
    }}>
      <div className="expense-title">
        {title}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div className="expense-amount">
          ₹{amount}
        </div>
        <button
          onClick={() => props.deleteExpense(expenseId)}
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: '#e74c3c',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            fontSize: '14px',
            lineHeight: '20px',
            textAlign: 'center',
            cursor: 'pointer',
            padding: 0
          }}
          title="Delete"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;
