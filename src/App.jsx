import React from 'react'
import Navbar from './Components/Navbar'
import Expencess from './Components/Expencess'
import { Listgroup } from './Components/Listgroup'
import Section1 from './Components/Section1'
import { ExpenseProvider } from './Components/Context/ExpenseContext'


const App = () => {
  return (
    <ExpenseProvider>
    <Navbar/>
      <div className="countainer">
    <Section1/>
    <Expencess/>
    <Listgroup/>
    </div>
    </ExpenseProvider>
  )
}

export default App