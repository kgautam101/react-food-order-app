import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./Context/CartProvider";
import RestaurantProvider from "./Context/RestaurantProvider";
import ThemeProvider from "./Context/ThemeProvider";
function App() {
  const [isShowCart, setIsShowCart] = useState(false);
  const showCartHandler = () => {
    setIsShowCart(true);
  };
  const hideCartHandler = () => {
    setIsShowCart(false);
  };
  return (
    <CartProvider>
      <RestaurantProvider>
        <ThemeProvider>
          {isShowCart && <Cart onClose={hideCartHandler} />}
          <Header showCartHandler={showCartHandler} />
          <main>
            <Meals />
          </main>
        </ThemeProvider>
      </RestaurantProvider>
    </CartProvider>
  );
}

export default App;
