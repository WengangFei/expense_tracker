import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../contenxt/globalState';


export default function Transaction() {

    let { transactions,deleteTransaction } = useContext(GlobalContext);

    let trans =  transactions.map(trans=>(
        <li className={trans.amount >0 ? 'plus' : 'minus'} 
        key={ trans.id }>   { trans.text } 
          <span>{ trans.amount > -1 ? '$'+ trans.amount : '-$'+ Math.abs(trans.amount) }</span>
          <button onClick={ ()=>deleteTransaction(trans.id) }className="delete-btn">x</button>
        </li> 
      
      ))


  return (<>{ trans }</>)
}
