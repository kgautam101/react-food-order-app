import { useState } from "react";
import DownCheveron from "./DownCheveron";
import classes from "./Selector.module.css";
const Selector = (props) => {
  const { title, values } = props;
  const [value, setValue] = useState("None");
  const [isExpanded, setIsExpanded] = useState(false);
  const selectorClick = () => {
    setIsExpanded(!isExpanded);
  };
  console.log("KG>>><<<values", values);
  const renderList = (values) => {
    return values.map((ele) => {
      return (
        <div
          className={classes.expansed_list}
          onClick={() => {
            setValue(ele.businessname);
            setIsExpanded(false);
          }}
        >
          {ele.businessname}
        </div>
      );
    });
  };
  return (
    <div className={classes.selector_class}>
      <h3 className={classes.selector_title}>{title}</h3>
      <div
        className={classes.selector_closed}
        onClick={selectorClick}
        style={{ backgroundColor: isExpanded ? "#FFFFFF" : null }}
      >
        <div>{value}</div>
        <div>
          <DownCheveron />
        </div>
      </div>
      {isExpanded && (
        <div className={classes.expanded_list}>{renderList(values)}</div>
      )}
    </div>
  );
};
export default Selector;
