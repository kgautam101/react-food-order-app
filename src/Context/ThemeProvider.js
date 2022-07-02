import { useState } from "react";
import ThemeContext from "./themeContext";

const ThemeProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const themeChangeHandler = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, themeChangeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
