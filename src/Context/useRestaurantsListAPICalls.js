import { useContext } from "react";
import { RestaurantContext } from "./RestaurantsContext";

const useRestaurantsListAPICalls = () => {
  const { setRestaurantsList } = useContext(RestaurantContext);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  async function getRestaurantList() {
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
