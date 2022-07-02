import { useContext } from "react";
import ThemeContext from "../../Context/themeContext";
import classes from "./Card.module.css";
const Card = (props) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className={isDarkMode ? classes.darkModeCard : classes.card}>
      {props.children}
    </div>
  );
};
export default Card;
