import classes from "./hud.module.css";
import Controls from "./Controls";
// import Stats from "./Stats";

const Hud = () => {
  return (
    <div className={classes.hud}>
      <Controls />
      {/* <Stats /> */}
    </div>
  );
};

export default Hud;
