import classes from "./Card.module.css";
import Button from "./Button";

const EnemyCard = (props) => {
  return (
    <section
      className={`${classes.card} ${classes.enemyCard}`}
      style={props.style ? props.style : null}
    >
      {props.children}
      {props.buttonText ? (
        <Button disabled={props.disabled} onClick={props.onClick}>
          {props.buttonText}
        </Button>
      ) : (
        ""
      )}
    </section>
  );
};

export default EnemyCard;
