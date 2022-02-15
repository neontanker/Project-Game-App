import classes from "./Display2.module.css";
import LocationItem from "../LocationItem";
import { useSelector } from "react-redux";

const Display2 = (props) => {
  const className = props.className;
  const isFighting = useSelector((state) => state.currentLocation.isFighting);
  const characterCreated = useSelector(
    (state) => state.hero.mainHero.characterCreated
  );
  console.log("disabled? ", isFighting);

  const Locations = props.Locations.map((item) => (
    <LocationItem
      id={item.id}
      key={item.id}
      location={item.location}
      enemy={item.enemy}
      style={item.style}
      buttonText={"Go"}
      disabled={isFighting || !characterCreated}
    />
  ));

  return <div className={classes[className]}>{Locations}</div>;
};

export default Display2;
