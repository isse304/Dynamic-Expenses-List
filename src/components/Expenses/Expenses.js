import Card from "../UI/Card";
import "./Expenses.css";
import "./ExpensesFilter/ExpensesFilter.js";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [pickedYear, setYear] = useState("2020");

  const pickYear = (selectedYear) => {
    setYear(selectedYear);
  };

  const filterByYear = props.expenses.filter(function (expense) {
    return expense.date.getFullYear().toString() === pickedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={pickedYear} onPickYear={pickYear} />
        <ExpensesChart expenses = {filterByYear} />
        <ExpensesList expenses = {filterByYear}/>
      </Card>
    </div>
  );
}
export default Expenses;
