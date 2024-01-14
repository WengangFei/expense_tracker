import React, { useReducer, useState } from 'react';




export default function Practice() {

const ACTION = {
   addToDo:'addtodo',
}

function newTodo(name){
    return { id: Date.now(), name: name, complete: false, }
}

function reducer(state,action){
    
    switch(action.type){
        case ACTION.addToDo:
            return [...state, newTodo(action.payload.name)];

        default :

    }
}

let [todos,dispatch] = useReducer(reducer,[]);
let [name,setName] = useState(''); 





function handleSubmit(e){
    
    e.preventDefault();
    dispatch({ type: ACTION.addToDo, payload: { name: name} });
    setName('');
}
 
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' value={ name } 
            onChange={e=>setName(e.target.value)} />
        </form>
    </div>
  )
} 
   