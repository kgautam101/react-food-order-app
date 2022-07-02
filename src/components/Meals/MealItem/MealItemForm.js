import { useContext, useRef, useState } from "react";
import ThemeContext from "../../../Context/themeContext";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputAmountRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputAmountRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button
        style={{
          backgroundColor: isDarkMode ? "#29A19C" : null,
          borderColor: isDarkMode ? "A3F7BF" : null,
        }}
      >
        + Add
      </button>
      {!amountIsValid && <p>Please enter a valid amount between 1 and 5.</p>}
    </form>
  );
};
export default MealItemForm;
