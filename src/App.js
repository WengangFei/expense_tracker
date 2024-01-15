import  Header from './components/header';
import Balance from './components/balance';
import IncomeExpenses from './components/incomeExpenses';
import TransactionList from './components/transactionList';
import AddTransaction from './components/addTransaction';
import './App.css';
import { GlobalProvider } from './contenxt/globalState';



function App() {

  
  return (
    <GlobalProvider className="App">
      <Header />
      <div className='container'>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
      </div>
    </GlobalProvider>
  );
}


export default App;
