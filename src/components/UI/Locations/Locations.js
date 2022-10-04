import debounce from "lodash.debounce";
import { useContext, useEffect, useMemo, useState } from "react";
import RestaurantsContext from "../../../Context/RestaurantsContext";
import classes from "./Locations.module.css";

const Locations = (props) => {
  const { title } = props;
  const { location, setLocation } = useContext(RestaurantsContext);
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const onChangeHandler = (e) => {
    setLocation(e.target.value);
  };
  const debouncedResult = useMemo(() => {
    return debounce(onChangeHandler, 500);
  }, []);
  
  useEffect(() => {
    return () => {
      debouncedResult.cancel();
    };
  });
  return (
    <div className={classes.locationWrapper}>
      <h3 className={classes.location_title}>{title}</h3>
      <input
        className={classes.locationInput}
        value={location}
        onChange={onChangeHandler}
      ></input>
    </div>
  );
};
export default Locations;
