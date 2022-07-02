import { useContext } from "react";
import ThemeContext from "../../Context/themeContext";
import classes from "./CartItem.module.css";
const CartItem = (props) => {
  const { isDarkMode } = useContext(ThemeContext);
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2 style={{ color: isDarkMode ? "#447cfc" : null }}>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span
            className={classes.amount}
            style={{ color: isDarkMode ? "#efe2ba" : null }}
          >
            x {props.amount}
          </span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
