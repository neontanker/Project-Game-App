import classes from "./InputCounter.module.css";

const InputCounter = (props) => {
  return (
    <div className={classes.number}>
      <span onClick={props.onMinus} className={classes.minus}>
        -
      </span>
      <input
        type="text"
        onChange={props.onChange}
        readOnly
        value={props.value}
      />
      <span onClick={props.onPlus} className={classes.plus}>
        +
      </span>
    </div>
  );
};

export default InputCounter;
