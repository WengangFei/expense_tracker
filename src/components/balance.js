import React, { useContext } from 'react';
import { GlobalContext } from '../contenxt/globalState';




const Balance = () => {
  let { transactions } = useContext(GlobalContext);
  let amount = transactions.map(trans=>trans.amount);
  let total = +amount.reduce((acc,curr)=>(acc += curr),0).toFixed(2);



  return (
    <>
      <h4>Your Balance:
        <span style={{fontSize:'xx-large',color:'red',margin:'20px'}}>
          { '$' + total }</span>
      </h4>
 
    </>
     
  
  )
}

export default Balance
