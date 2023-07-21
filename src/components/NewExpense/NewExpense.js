import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    hideAddExpense();
  };

  const [addExpenseHandler, setAddExpenseHandler] = useState(true);

  function showAddExpense(event) {
    setAddExpenseHandler(false);
  }
  function hideAddExpense(event) {
    setAddExpenseHandler(true);
  }

  if (addExpenseHandler) {
    return (
      <div className="new-expense">
        <button onClick={showAddExpense}>Add expense</button>;
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <ExpenseForm
          onCancel={hideAddExpense}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      </div>
    );
  }
}
export default NewExpense;
