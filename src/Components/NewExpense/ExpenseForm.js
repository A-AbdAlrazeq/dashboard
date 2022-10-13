import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //we can use multiple state
  /*  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredAmount: "",
  }); */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /* setUserInput({
      ...userInput,
      enteredTitle: event.target.value, // we use spread operator So as not to lose other data
    }); */
  };
  const amountChangeHandler = (event) => {
    /*  setUserInput({
      ...userInput,
      enteredAmount: event.target.value,  //we use spread operator So as not to lose other data
    }); */
    setEnteredAmount(event.target.value);
    //this is the safer way on the latest state snapshot
    //we use this when your state update depends on the previous state
    /* setUserInput((prevstate) => {
      return { ...prevstate, enteredAmount: event.target.value };
    }); */
  };
  const dateChangeHandler = (event) => {
    /*  setUserInput({
      ...userInput,
      enteredDate: event.target.value, // we use spread operator So as not to lose other data
    }); */
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault(); //page will not reloead of any request does not send
    const expenseDate = {
      title: enteredTitle,
      amount: +enteredAmount, //Unary plus (+) to convert string to number
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseDate);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    //console.log(expenseDate);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-1-1"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
