
import Transaction from './transaction';


const TransactionList = () => {
  
  return (
    <>
        <h3>History</h3>
        <ul className="list">
          <Transaction />  
        </ul>
    </>
  )
}

export default TransactionList
