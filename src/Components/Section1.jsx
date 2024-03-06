import React, { useContext, useEffect, useState } from 'react'
import ExpenseContext from './Context/ExpenseContext'

const Section1 = () => {

  const { transactions, savetransaction, edit, update } = useContext(ExpenseContext);


  const balance = transactions.reduce((p, c) => {
    return p + c.amount;
  }, 0);

  const [text, settext] = useState("")
  const [amount, setamount] = useState("")

  const handlesubmit = (e) => {
    e.preventDefault();
    if (edit.editmode) {
      update({
        id: edit.transaction.id,
        text: text,
        amount: +amount,
      });
    } else {
      savetransaction(text, amount)
    }
    setamount("")
    settext("")
  }
  useEffect(() => {
    setamount(edit.transaction.amount)
    settext(edit.transaction.text)
  }, [edit])




  return (
    <div className="section1">
      <div className="box1">
        <h1>Balance  : <br /> {balance} </h1>
      </div>
      <form className="Form" onSubmit={handlesubmit}>
        <input type="number" placeholder='Enter Amount' value={amount} onChange={(e) => setamount(e.target.value)} />
        <input type="text" placeholder='Enter Expense' id='thakur' value={text} onChange={(e) => settext(e.target.value)} />
        <button>Save</button>
      </form>
    </div>
  )
}

export default Section1