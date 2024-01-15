
export default function AppReducer(state, action) {
    console.log(state)
    switch(action.type){
        case 'delete_transaction':
            return { 
                transactions:state.transactions.filter(trans=>trans.id !== action.payload),
            }

        case 'add_transaction':
            return {
                transactions:[...state.transactions,action.payload]
            }

        default:
            return state;
    }
  
}
