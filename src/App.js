import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
function App() {
  const [isShowCart, setIsShowCart] = useState(false);
  const showCartHandler = () => {
    setIsShowCart(true);
  };
  const hideCartHandler = () => {
    setIsShowCart(false);
  };
  return (
    <React.Fragment>
      {isShowCart && <Cart onClose={hideCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
