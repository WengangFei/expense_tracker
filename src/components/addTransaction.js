import React, { useContext, useState } from 'react';
import { GlobalContext } from '../contenxt/globalState';

const AddTransaction = () => {

    let [text,setText] = useState();
    let [amount,setAmount] = useState(0);
    let { addTransaction } = useContext(GlobalContext);

    function handleSubmit(e){
      e.preventDefault();
      addTransaction({
        id: Math.floor(Math.random() * 100000),
        text,
        amount: +amount,
      });
    }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={ handleSubmit }>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={ text } 
                onChange={(e)=>{setText(e.target.value)}}
                placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" value={ amount }
                onChange={(e)=>{setAmount(e.target.value)}}
                placeholder="Enter amount..." />
        </div>
        <button type='submit' className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction;
