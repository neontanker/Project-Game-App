import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${classes.bn632Hover} ${
        props.disabled ? classes.disabled : classes.bn27
      }`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
