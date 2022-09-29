import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  //Υπάρχει θέμα που δημιουργώ ένα state και δεν χρησιμοποιώ το updatedExpenses;
  const [updatedExpenses, setUpdatedExpenses] = useState("");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //Πριν ήταν const
  let filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const deleteExpenseHandler = (goalId) => {
    setUpdatedExpenses((filteredExpenses) => {
      //Τι πρέπει να βάλω στο body;
      filteredExpenses = filteredExpenses.filter(
        (items) => items.id !== goalId
      );
      return filteredExpenses;
    });
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList
        items={filteredExpenses}
        onDeleteItem={deleteExpenseHandler}
      />
    </Card>
  );
}
