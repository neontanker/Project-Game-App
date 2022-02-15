import classes from "./Main.module.css";
import Display1 from "./Display1/Display1";
import Display2 from "./Display2/Display2";
import LocationsData from "../Helpers/Data/Locations";

const Locations = LocationsData;

const MainDisplay = () => {
  console.log("main running!");
  return (
    <div className={classes.main}>
      <Display1 className="display1" />
      <Display2 className="display2" Locations={Locations} />
    </div>
  );
};

export default MainDisplay;
