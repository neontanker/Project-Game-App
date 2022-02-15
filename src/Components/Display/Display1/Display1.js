import { useDispatch, useSelector } from "react-redux";
import classes from "./Display1.module.css";
import LocationItem from "../LocationItem";
import Button from "../../UI/Button";
import Battle from "./Battle";
import { toggleEndFight, toggleFight } from "../../../Store/location-slice";
import EndFightScreen from "./EndFightScreen";

const Display1 = (props) => {
  // Main display for current events (selected locations, battles etc)
  const dispatch = useDispatch();
  const className = props.className;

  const item = useSelector((state) => state.currentLocation);
  const characterCreated = useSelector(
    (state) => state.hero.mainHero.characterCreated
  );
  const isFighting = item.isFighting;
  const fightEnded = item.fightEnded;
  const currentLocation = item.currentLocation;
  // const enemy = currentLocation.enemy;

  const onFightToggleHandler = () => {
    dispatch(toggleFight());
    if (isFighting) {
      dispatch(toggleEndFight());
    }
    // There is a bug if the modal is open you can still press buttons via Tab and Enter which causes problems, hoping to fix this by adding logic checks to redux reducer
    // Could fix this problem with "focus lock" on the modal
  };

  let content = "";
  if (fightEnded && !isFighting) {
    content = <p className={classes.selectMessage}>Select a location.</p>;
  } else if (item.currentLocation.id > 0 && !isFighting) {
    content = (
      <LocationItem
        id={currentLocation.id}
        location={currentLocation.location}
        style={currentLocation.style}
      >
        <Button onClick={onFightToggleHandler}>Fight</Button>
      </LocationItem>
    );
  } else if (item.currentLocation.id > 0 && isFighting) {
    content = <Battle FightToggleHandler={onFightToggleHandler} />;
  } else if (!characterCreated) {
    content = <p className={classes.selectMessage}>Create a hero.</p>;
  } else {
    content = <p className={classes.selectMessage}>Select a location.</p>;
  }

  return (
    <>
      {fightEnded && isFighting && <EndFightScreen />}
      <div className={classes[className]}>{content}</div>
    </>
  );
};

export default Display1;
