import { useState } from "react";
import { RestaurantContext } from "./RestaurantsContext";

const RestaurantProvider = (props) => {
  const [restaurantsList, setRestaurantsList] = useState([]);

  return (
    <RestaurantContext.Provider value={{ restaurantsList, setRestaurantsList }}>
      {props.children}
    </RestaurantContext.Provider>
  );
};
export default RestaurantProvider;
