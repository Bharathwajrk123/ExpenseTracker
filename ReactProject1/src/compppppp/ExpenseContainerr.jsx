import React, { useState, useEffect } from 'react';
import Expenseformm from './Expenseformm.jsx';
import History from './History.jsx';
import BalanceContainer from './BalanceContainer.jsx';
import { v4 as uid } from "uuid";

function ExpenseContainerr() {
    const [expense, setExpense] = useState([]);

    function fetchExpense() {
        fetch('http://localhost:6200/expenses')
            .then(res => res.json())  
            .then(data => setExpense(data))
            .catch(err => console.error('Error fetching:', err));
    }

    useEffect(() => {
        fetchExpense();
    }, []);

    const addexpensedb = (title, amount) => {
        fetch('http://localhost:6200/expenses', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, amount }),
        })
            .then(res => res.json())
            .then(data => {
                setExpense([...expense, data]); 
            })
            .catch(err => console.error('Error adding:', err));
    };

    const addexpense = (title, amount) => {
        addexpensedb(title, amount);
    };

    async function deleteExpensedb(id) {
        try {
            const response = await fetch(`http://localhost:6200/expenses/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Network error');
            }

            fetchExpense(); 
        } catch (error) {
            console.error('Error deleting:', error);
        }
    }

    const deleteExpense = (id) => {
        deleteExpensedb(id);
    };

    return (
        <div className='expense-container'>
            <h1>Expense Tracker</h1>
            <BalanceContainer expense={expense} />
            <History expense={expense} deleteExpense={deleteExpense} />
            <Expenseformm addexpense={addexpense} />
        </div>
    );
}

export default ExpenseContainerr;
