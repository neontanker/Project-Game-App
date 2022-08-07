import classes from "./MainDisplay.module.css";
import ActiveDisplay from "./ActiveDisplay/ActiveDisplay";
import SelectionDisplay from "./SelectionDisplay/SelectionDisplay";
import LocationsData from "../Helpers/Data/Locations";

const Locations = LocationsData;

const MainDisplay = () => {
  console.log("main running!");
  return (
    <div className={classes.main}>
      <ActiveDisplay className="display1" />
      <SelectionDisplay className="display2" Locations={Locations} />
    </div>
  );
};

export default MainDisplay;
