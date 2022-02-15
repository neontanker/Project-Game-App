import classes from "./LocationItem.module.css";
import Card from "../UI/Card";
import { useDispatch } from "react-redux";
import { changeCurrentLocation } from "../../Store/location-slice";
import { changeCurrentEnemies } from "../../Store/enemy-slice";

const LocationItem = (props) => {
  const { enemy, ...newProps } = props;

  const dispatch = useDispatch();
  const onClickHandler = () => {
    console.log("ChangingCurrentLocation!", newProps);
    dispatch(changeCurrentEnemies(enemy));
    dispatch(changeCurrentLocation(newProps));
  };
  return (
    <Card
      onClick={onClickHandler}
      buttonText={props.buttonText}
      disabled={props.disabled}
      style={props.style ? props.style : null}
    >
      <div className={classes.desc}>
        <p>{props.location}</p>
        <p>{props.name}</p>
      </div>
      {props.children}
    </Card>
  );
};

export default LocationItem;
