import classes from "./StatPoint.module.css";
import InputCounter from "./InputCounter";

const StatPoint = (props) => {
  const onMinusHandler = () => {
    if (props.value <= 0) {
      return;
    }
    props.removePoint(props.id);
  };
  const onPlusHandler = () => {
    if (props.points <= 0) {
      return;
    }
    props.addPoint(props.id);
  };
  return (
    <div>
      <div className={classes.counterContainer}>
        <p>{props.id}:</p>
        <InputCounter
          value={props.value}
          onMinus={onMinusHandler}
          onPlus={onPlusHandler}
        />
      </div>
    </div>
  );
};
export default StatPoint;
