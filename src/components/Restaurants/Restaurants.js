import React, { useContext, useEffect } from "react";
import { RestaurantContext } from "../../Context/RestaurantsContext";
import useRestaurantsListAPICalls from "../../Context/useRestaurantsListAPICalls";
import Selector from "../UI/Selector/Selector";

const Restaurants = () => {
  const { restaurantsList } = useContext(RestaurantContext);
  const { getRestaurantList } = useRestaurantsListAPICalls();
  const customObject = {
    reviews: "",
    parkinglot: "",
    location: "",
    phone: "",
    averagecost: "",
    image: "",
    imageId: "",
    restauranttype: "",
    _id: "0",
    businessname: "Select your favourite Restaurant",
    address: "",
    slug: "",
    email: "",
    __v: 0,
    foodMenu: [],
    id: "0",
  };
  const values = [customObject, ...restaurantsList];
  useEffect(() => {
    getRestaurantList();
  }, []);

  return <Selector title={"Restaurants"} values={values} />;
};
export default Restaurants;
