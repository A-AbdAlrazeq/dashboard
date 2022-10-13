import ExpenseDate from "./ExpenseDate";
import React from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
function ExpenseItem(props) {
  /*  const [title, setTitle] = useState(props.title); */
  //title is the current state value;
  //setTitle is call function to update the value;
  //useState always return array with excactly two elemnts
  /* const clickHandler = () => {
    setTitle("updated!"); //assign new value and re-evaluted
    //we use this insted of intialize new value like title="updated"; not just for calling update function
    // it's well be excuted again
  }; */
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/*  <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}
export default ExpenseItem;
