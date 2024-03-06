import React, { useContext } from 'react'
import ExpenseContext from './Context/ExpenseContext'


export const Listitem = ({transaction}) => {

  const {Remove,edittransaction} = useContext(ExpenseContext)


const handleRemove = (id)=>{
Remove(id)
}

 const handlEdit = (transaction)=>{
edittransaction(transaction);
 } 


  return (
    <div> 
        <li>

    <h1>{transaction.text} :  {transaction.amount}</h1>
    
<span className='float-end'>
<button className='btn btn-warning m-1' onClick={()=>handlEdit(transaction)}>Edit</button>
<button className='btn btn-danger' onClick={()=>handleRemove(transaction.id)}>Delete</button>
</span>
</li>
 </div>
  )
}
