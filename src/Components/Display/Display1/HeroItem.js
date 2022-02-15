import HeroCard from "../../UI/HeroCard";
import classes from "./EnemyItem.module.css";
// Using classes from EnemyItem because (lazy) I should it refactor later to probably "BattleItem" or create a more custom Hero item.

const HeroItem = (props) => {
  return (
    <>
      <div className={classes.container}>
        <p className={classes.desc}>{props.name}</p>
      </div>
      <HeroCard
        onClick={props.onClick}
        buttonText={props.buttonText}
        disabled={props.disabled}
        style={props.style ? props.style : null}
      >
        <div className={classes.stats}>
          <p>
            HP: {props.health}/{props.maxHealth}
          </p>
          <p>Str: {props.str}</p>
          <p>Def: {props.def}</p>
        </div>
        {props.children}
      </HeroCard>
    </>
  );
};

export default HeroItem;
