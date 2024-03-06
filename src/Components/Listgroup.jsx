import React, { useContext } from 'react'
import { Listitem } from './Listitem'
import ExpenseContext from './Context/ExpenseContext'

export const Listgroup = () => {

  const {transactions} = useContext(ExpenseContext)


  return (
   <>
   <div className="Listgroup">
   <h1>Transactions :</h1>
<ul>
{/* {
  transactions.map((transaction) => <Listitem key={transaction.id} transaction={transaction}/>)
} */}
{
  transactions.map((transaction)=>(<Listitem key={transaction.id} transaction={transaction}/>))}


</ul>
</div>
</>

  )
}
