import React, { useEffect, useState } from "react";
import useRestaurantsListAPICalls from "../../Context/useRestaurantsListAPICalls";
import Selector from "../UI/Selector/Selector";

const Restaurants = (props) => {
  const { restaurantsList, getRestaurantList } = useRestaurantsListAPICalls();

  useEffect(() => {
    getRestaurantList();
  }, []);
  return <Selector title={"Restaurants"} values={restaurantsList} />;
};
export default Restaurants;
