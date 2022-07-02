import React, { useContext } from "react";
import ThemeContext from "../../Context/themeContext";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
const Meals = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: isDarkMode ? "#073042" : "white" }}>
      <MealsSummary />
      <AvailableMeals />
    </div>
  );
};
export default Meals;
