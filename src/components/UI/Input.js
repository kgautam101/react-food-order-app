import React, { useContext } from "react";
import ThemeContext from "../../Context/themeContext";
import classes from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className={classes.input}>
      <label
        htmlFor={props.input.id}
        style={{ color: isDarkMode ? "#DBD8E3" : null }}
      >
        {props.label}
      </label>
      <input ref={ref} {...props.input} />
    </div>
  );
});
export default Input;
