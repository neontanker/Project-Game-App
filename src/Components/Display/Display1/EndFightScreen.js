import { useDispatch, useSelector } from "react-redux";
import { toggleFight } from "../../../Store/location-slice";
import Modal from "../../UI/Modal";
import { getCurrentEnemies } from "./selectors";

const EndFightScreen = (props) => {
  const fightStatus = useSelector((state) => state.currentLocation.fightStatus);
  const currentEnemies = useSelector(getCurrentEnemies);
  const heroes = useSelector((state) => state.hero);
  const currentHero = "mainHero";
  const mainHero = heroes[currentHero];
  const dispatch = useDispatch();
  const onToggleModal = () => {
    dispatch(toggleFight());
  };
  let endFightMessage = "";
  if (fightStatus === "lose") {
    //battleEnd(enemyWin)
    //props.FightToggleHandler() - not needed, we'll do this somewhere else after victory/defeat screen shows
    endFightMessage = "You lose!";
  } else if (fightStatus === "win") {
    if (mainHero.extras.experience >= mainHero.extras.expToLevelUp) {
      endFightMessage = (
        <div>
          <p>
            You win! {currentEnemies.name} gave you {currentEnemies.exp}{" "}
            experience!
          </p>
          <p>
            You have leveled up to level {mainHero.extras.level + 1}! You have{" "}
            {mainHero.extras.experience - mainHero.extras.expToLevelUp} /
            {mainHero.extras.expToLevelUp + mainHero.extras.expToLevelUp / 2}
            experience!
          </p>
        </div>
      );
    } else {
      endFightMessage = (
        <div>
          <p>You win!</p>
          <p>
            {currentEnemies.name} gave you {currentEnemies.exp} experience!
          </p>
          <p>
            You are level {mainHero.extras.level} and have{" "}
            {mainHero.extras.experience} / {mainHero.extras.expToLevelUp}{" "}
            experience!
          </p>
        </div>
      );
    }
  }

  return (
    <Modal onClick={onToggleModal}>
      <p>{endFightMessage}</p>
    </Modal>
  );
};

export default EndFightScreen;
