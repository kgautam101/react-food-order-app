import { useContext, useEffect } from "react";
import RestaurantsContext from "./RestaurantsContext";

const useRestaurantsListAPICalls = () => {
  const { setRestaurantsList, setGeoLocation, geoLocation } =
    useContext(RestaurantsContext);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setGeoLocation(position.coords);
    });
  }, []);
  useEffect(() => {
    async function fetchRestaurants(lat, long) {
      const list = await fetch(
        `https://developers.zomato.com/api/v2.1/collections?lat=${geoLocation?.lat}&lon=${geoLocation?.long}&count=10`
      );
      const res = await list.json();
      console.log("KG>>><<<res", res);
    }
    fetchRestaurants(geoLocation?.lat, geoLocation?.long);
  }, []);

  async function getRestaurantList() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    try {
      const list = await fetch(
        "https://foodbukka.herokuapp.com/api/v1/restaurant",
        requestOptions
      );
      const result = await list.json();
      setRestaurantsList(result?.Result);
    } catch (error) {
      console.error(error);
    }
  }
  return { getRestaurantList };
};
export default useRestaurantsListAPICalls;
