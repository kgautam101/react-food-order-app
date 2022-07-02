import React, { useContext } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import homeSVG from "../../assets/home-svgrepo-com.svg";
import foodSVG from "../../assets/fast-food-svgrepo-com.svg";
import themeChangerIcon from "../../assets/dark-theme-svgrepo-com.svg";
import ThemeContext from "../../Context/themeContext";

const Header = (props) => {
  const { isDarkMode, themeChangeHandler } = useContext(ThemeContext);
  return (
    <React.Fragment>
      <header className={classes.header}>
        <div className={classes.appLogo}>
          <img
            className={classes.svgIcons}
            src={foodSVG}
            alt="food
           Icon"
          />
          <div className={classes.Logotitle}>
            <h3>Food</h3>
            <h1 style={{ color: "#f13c20" }}>2</h1>
            <h3>Home</h3>
          </div>
          <img className={classes.svgIcons} src={homeSVG} alt="home Icon" />
        </div>
        <div
          onClick={themeChangeHandler}
          className={isDarkMode ? classes.darkModeTheme : null}
        >
          <img src={themeChangerIcon} alt="theme icon" />
        </div>
        <HeaderCartButton onClick={props.showCartHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a table full of meals" />
      </div>
    </React.Fragment>
  );
};
export default Header;
