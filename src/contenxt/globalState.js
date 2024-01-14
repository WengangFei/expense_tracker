import { createContext, useContext, useReducer} from "react";
import AppReducer from './appReducer';

const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20.233 },
        { id: 2, text: 'Salary', amount: 300.453 },
        { id: 3, text: 'Book', amount: -10.243 },
        { id: 4, text: 'Camera', amount: 150.562 },
    ]
}

//create global context.
export const GlobalContext = createContext(initialState);
//create a wrapper context component
export function GlobalProvider({ children }){
     let [state, dispatch] = useReducer(AppReducer,initialState);

     return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
        }}>
            { children }
        
        </GlobalContext.Provider>
     );
}


