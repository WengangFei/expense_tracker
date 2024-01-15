import React, { useContext } from 'react'
import { GlobalContext } from '../contenxt/globalState'

const IncomeExpenses = () => {

  let { transactions } = useContext(GlobalContext);

  let transArr = transactions.map(trans=>trans.amount);
  let incomesTotal = transArr.filter(item=>item>0).reduce((acc,cur)=>(acc+=cur),0).toFixed(2);
  let expenseTotal = transArr.filter(item=>item<0).reduce((acc,cur)=>(acc+=cur),0).toFixed(2);


  return (
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p className="money plus">{ incomesTotal }</p>
        </div>
            <div>
            <h4>Expense</h4>
            <p className="money minus">{ expenseTotal }</p>
        </div>
  </div>
  )
}

export default IncomeExpenses
