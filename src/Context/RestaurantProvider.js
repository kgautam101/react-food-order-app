import { useState } from "react";
import RestaurantsContext from "./RestaurantsContext";

const RestaurantProvider = (props) => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [location, setLocation] = useState();
  const [geoLocation, setGeoLocation] = useState({});
  const RestaurantsContextState = {
    restaurantsList: restaurantsList,
    setRestaurantsList: setRestaurantsList,
    location: location,
    setLocation: setLocation,
    geoLocation: geoLocation,
    setGeoLocation: setGeoLocation,
  };

  return (
    <RestaurantsContext.Provider value={RestaurantsContextState}>
      {props.children}
    </RestaurantsContext.Provider>
  );
};
export default RestaurantProvider;
