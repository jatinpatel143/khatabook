import React, { useContext } from 'react'
import ExpenseContext from './Context/ExpenseContext'

const Expencess = () => {

  const {transactions}= useContext(ExpenseContext)



  const income  = transactions.filter(item=>item.amount>0).reduce((p,c)=>{
return p + c.amount
  },0)

  const Expense  = transactions.filter(item=>item.amount<0).reduce((p,c)=>{
    return p + c.amount
      },0)

  return (
  <>
  <div className="Expencess">
  <div className="boxes1">
        <h1>Total Expencse : <br />{Expense}</h1>
    </div>
    <div className="boxes2">
        <h1>Total Income : <br /> {income}</h1>
    </div>
    </div>
  </>
  )
}

export default Expencess