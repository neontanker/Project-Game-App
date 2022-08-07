import { useDispatch, useSelector } from "react-redux";

import classes from "./Battle.module.css";
import EnemyItem from "./EnemyItem";
import Button from "../../../UI/Button";
import { attack } from "../../../../Store/enemy-slice";
import HeroItem from "./HeroItem";
import { useState } from "react";
import { changeHeroHealth, levelUp } from "../../../../Store/hero-slice";
import { toggleEndFight } from "../../../../Store/location-slice";
import { getCurrentEnemies } from "../../../Helpers/selectors";

//Stats array: / 0: str / 1: vit / 2: int / 3: def /
const STRENGTH_INDEX = 0;
// const VITALITY_INDEX = 1;
// const INTELLIGENCE_INDEX = 2;
const DEFENSE_INDEX = 3;

// different way (maybe slower with .find?) to get stats
// const getStatFromMainHeroById = (mainHero, id) =>
//   mainHero.stats.find((stat) => stat.id === id);

// accessing stat using method above
// const mainHeroDefValue = getStatFromMainHeroById(mainHero, "def").value;

const Battle = (props) => {
  const [heroMessages, setHeroMessages] = useState("");
  const [enemyMessages, setEnemyMessages] = useState("");
  const [staleTurnCounter, setStaleTurnCounter] = useState(0);
  const currentEnemies = useSelector(getCurrentEnemies);
  const dispatch = useDispatch();
  const heroes = useSelector((state) => state.hero);
  const currentHero = "mainHero";
  const mainHero = heroes[currentHero];
  const mainHeroStr = mainHero.stats[STRENGTH_INDEX].value;
  // const mainHeroVit = mainHero.stats[VITALITY_INDEX].value;
  // const mainHeroInt = mainHero.stats[INTELLIGENCE_INDEX].value;
  const mainHeroDef = mainHero.stats[DEFENSE_INDEX].value;
  const attackHandler = () => {
    let damageGiven = mainHeroStr - currentEnemies.def;
    let damageTaken = currentEnemies.str - mainHeroDef;
    const noDamageGiven = damageGiven <= 0;
    const noDamageTaken = damageTaken <= 0;

    if (noDamageTaken && noDamageGiven) {
      if (staleTurnCounter <= 10) {
        setHeroMessages("It seems we are evenly matched..");
        setEnemyMessages("I'll keep you here forever!!");
        setStaleTurnCounter(staleTurnCounter + 1);
        console.log("turncounter", staleTurnCounter);
        return;
      }
      if (staleTurnCounter < 100) {
        console.log("turncounterOUTER", staleTurnCounter);
        setHeroMessages("Why won't you die?!");
        setStaleTurnCounter(staleTurnCounter + 1);
        setEnemyMessages("You're still trying?");
        return;
      }
      if (staleTurnCounter >= 100) {
        damageGiven = currentEnemies.health;
        setHeroMessages("...");
        setEnemyMessages("I can't stand you anymore, I'm leaving.");
        const endStaleFight = () => {
          dispatch(attack(damageGiven));
          dispatch(toggleEndFight());
        };
        setTimeout(() => {
          endStaleFight();
        }, 3000);
        // battleEnd(heroWin)
        return;
      }
    }
    // ^ stale mate message sequence

    console.log(currentEnemies.health);
    const EnemyHPCalc = currentEnemies.health - damageGiven;
    const HeroHPCalc = mainHero.health - damageTaken;
    let fightStatus = null;
    if (EnemyHPCalc <= 0) {
      damageGiven = currentEnemies.health;
      fightStatus = "win";
      dispatch(attack(damageGiven));
      dispatch(levelUp(currentEnemies.exp));
      // calculating values here as unsure how to wait for updated values from the redux store dispatch(levelUp) & mainHero.extras.experience etc..
      dispatch(toggleEndFight({ fightStatus }));

      return;
    }
    if (HeroHPCalc <= 0) {
      damageTaken = mainHero.health;
      //battleEnd(enemyWin)
      //props.FightToggleHandler() - not needed, we'll do this somewhere else after victory/defeat screen shows
      fightStatus = "lose";
      dispatch(changeHeroHealth({ damageTaken }));
      dispatch(toggleEndFight({ fightStatus }));
      return;
    }
    console.log("EnemyHPCALC", EnemyHPCalc);

    if (noDamageGiven) {
      damageGiven = 0;
      setEnemyMessages("Blocked your attack!");
      setHeroMessages("");
      dispatch(changeHeroHealth({ damageTaken }));
    } else if (noDamageTaken) {
      damageTaken = 0;
      setHeroMessages("Blocked enemy attack!");
      setEnemyMessages("");
      dispatch(attack(damageGiven));
      // ^ blocked damage handler
    } else {
      dispatch(changeHeroHealth({ damageTaken }));
      dispatch(attack(damageGiven));
      setEnemyMessages("");
      setHeroMessages("");
    }
  };

  return (
    <div className={classes.splitscreen}>
      <div className={classes.left}>
        <HeroItem
          name={mainHero.name}
          style={mainHero.style}
          health={mainHero.health}
          maxHealth={mainHero.maxHealth}
          str={mainHero.stats[0].value}
          def={mainHero.stats[3].value}
        />
        <div className={classes.under}>
          <Button onClick={attackHandler}>Attack</Button>
          <Button onClick={props.FightToggleHandler}>Run</Button>
          <p className={classes.messages}>{heroMessages}</p>
        </div>
      </div>
      <div className={classes.right}>
        <EnemyItem
          name={currentEnemies.name}
          style={currentEnemies.style}
          health={currentEnemies.health}
          maxHealth={currentEnemies.maxHealth}
          str={currentEnemies.str}
          def={currentEnemies.def}
        ></EnemyItem>
        <p className={classes.messages}>{enemyMessages}</p>
      </div>
    </div>
  );
};

export default Battle;
