import React, { useContext, useEffect } from "react";
import RestaurantsContext from "../../Context/RestaurantsContext";
import useRestaurantsListAPICalls from "../../Context/useRestaurantsListAPICalls";
import Locations from "../UI/Locations/Locations";
import Selector from "../UI/Selector/Selector";

const Restaurants = () => {
  const { restaurantsList } = useContext(RestaurantsContext);
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

  return (
    <div>
      <Locations title={"Search your location:"} />
      <Selector title={"Restaurants"} values={values} />
    </div>
  );
};
export default Restaurants;
