import { useState } from "react";
import DownCheveron from "./DownCheveron";
import classes from "./Selector.module.css";
const Selector = (props) => {
  const { title, values } = props;
  const [value, setValue] = useState(values[0]?.businessname);
  const [isExpanded, setIsExpanded] = useState(false);
  const selectorClick = () => {
    setIsExpanded(!isExpanded);
  };
  const renderList = (values) => {
    return values.map((ele) => {
      return (
        <div
          className={classes.expansed_list}
          key={ele?.id}
          onClick={() => {
            setValue(ele?.businessname);
            setIsExpanded(false);
          }}
        >
          {ele?.businessname}
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
        <div
          style={{
            transform: isExpanded ? "rotate(180deg)" : "",
            transition: "transform 190ms ease",
          }}
        >
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
