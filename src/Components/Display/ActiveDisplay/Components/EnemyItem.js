import classes from "./EnemyItem.module.css";
import EnemyCard from "../../../UI/EnemyCard";
// import { useDispatch } from "react-redux";
// import { changeCurrentLocation } from "../../Store/location-slice";

const EnemyItem = (props) => {
  // moved logic outside of EnemyItem into (LocationItem)
  //   const dispatch = useDispatch();
  //   const onClickHandler = () => {
  //     console.log("Clicked!", props);
  //     dispatch(changeCurrentLocation(props));
  //   };
  return (
    <>
      <div className={classes.container}>
        <p className={classes.desc}>{props.name}</p>
      </div>

      <EnemyCard
        onClick={props.onClick}
        buttonText={props.buttonText}
        disabled={props.disabled}
        style={props.style ? props.style : null}
      >
        <div className={classes.desc}>
          <p>{props.location}</p>
        </div>
        <div className={classes.stats}>
          <p>HP: {props.health}</p>
          <p>Str: {props.str}</p>
          <p>Def: {props.def}</p>
        </div>
        {props.children}
      </EnemyCard>
    </>
  );
};

export default EnemyItem;
