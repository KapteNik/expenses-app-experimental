import React, {useState} from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  //WORK IN PROGRESS
  // const [filteredExpenses, setFinalExpenses] = useState("");

  const filterChangeHandler = selectedYear => {
   setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // WORK IN PROGRESS
  // const deleteExpenseHandler = goalId => {
  //   setCourseGoals(prevGoals => {
  //     const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
  //     return updatedGoals;
  //   });
  // };

  return (
    <Card className='expenses'>
       <ExpenseFilter 
       selected={filteredYear} 
       onChangeFilter={filterChangeHandler}
       />
      <ExpensesChart expenses={filteredExpenses} />
     <ExpensesList items={filteredExpenses} />
    </Card>
  )
}
