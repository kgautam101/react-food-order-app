import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import homeSVG from "../../assets/home-svgrepo-com.svg";
import foodSVG from "../../assets/fast-food-svgrepo-com.svg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <div className={classes.appLogo} onClick={() => {}}>
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
        <HeaderCartButton onClick={props.showCartHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a table full of meals" />
      </div>
    </React.Fragment>
  );
};
export default Header;
