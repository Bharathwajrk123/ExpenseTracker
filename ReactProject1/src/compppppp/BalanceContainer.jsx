import React from 'react';
import CurrenctItem from './CurrenctItem';
function BalanceContainer(props) {
    const {expense} = props;
    let income = 0;
    let expenses = 0;
    expense.forEach((item) => {
        let{amount} = item;
        if(amount>0) {
            income += parseInt(amount)
        }else{
            expenses +=parseInt(amount)
        }
    })
    return (
        <div className = 'balance-container'>
        <CurrenctItem title = "Income" amount = {income} type = "income"/>
        <CurrenctItem title = "Expense" amount = {expenses} type = "expense"/>
        <CurrenctItem title = "Balance" amount = {income + expenses} type = "balance"/> 

        </div>
    )

}   
export default BalanceContainer;























































































































