import { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";

const ExpenseContext = createContext()

export const ExpenseProvider =({children}) => {

    const initialstate  = {
        transactions : [],
        edit : {transaction :{},Editmode :false}
    };

    const [state,dispatch] = useReducer(ExpenseReducer,initialstate)
    
    const savetransaction=(text,amount)=>{
    dispatch({
        type:"SAVE",
        payload :{
            id : crypto.randomUUID(),
            text,
            amount : parseInt(amount),
        }
    })
    }

    const Remove = (id)=>{
dispatch({
    type : "REMOVE",
    payload: id,

})
    }
const edittransaction = (oldtransaction)=>{
dispatch({
    type : "EDIT",
    payload : oldtransaction,
})
}

const update = (transaction)=>{
dispatch({
    type : "UPDATE",
    payload : transaction,
})
}

return (
<ExpenseContext.Provider value={{...state,savetransaction,Remove,edittransaction,update}}>
    {children}
</ExpenseContext.Provider>)
}


export default ExpenseContext;


