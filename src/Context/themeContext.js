import React from "react";

const initialThemeState = {
  isDarkMode: false,
  themeChangeHandler: () => {},
};

const ThemeContext = React.createContext({ initialThemeState });
export default ThemeContext;
