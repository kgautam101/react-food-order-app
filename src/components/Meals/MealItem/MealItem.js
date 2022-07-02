import { useContext } from "react";
import CartContext from "../../../Context/cartContext";
import ThemeContext from "../../../Context/themeContext";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const { addItem } = useContext(CartContext);
  const { isDarkMode } = useContext(ThemeContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3 style={{ color: isDarkMode ? "#DBD8E3" : null }}>{props.name}</h3>
        <div
          style={{ color: isDarkMode ? "#DBD8E3" : null }}
          className={classes.description}
        >
          {props.description}
        </div>
        <div
          style={{ color: isDarkMode ? "#f1bc49" : null }}
          className={classes.price}
        >
          {price}
        </div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
