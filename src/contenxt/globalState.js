import { createContext, useContext, useReducer} from "react";
import AppReducer from './appReducer';

const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20.233 },
        { id: 2, text: 'Salary', amount: 300.453 },
    
    ]
}

//create global context.
export const GlobalContext = createContext(initialState);
//create a wrapper context component
export function GlobalProvider({ children }){

     let [state, dispatch] = useReducer(AppReducer,initialState);
     //action
    function deleteTransaction(id){
        dispatch({
            type: 'delete_transaction',
            payload: id,
        });
    }

    function addTransaction(transaction){
        dispatch({
            type:'add_transaction',
            payload: transaction,
        });
    }

     return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            { children }
        
        </GlobalContext.Provider>
     );
}


