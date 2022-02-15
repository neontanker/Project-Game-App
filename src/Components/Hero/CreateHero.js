import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import classes from "./CreateHero.module.css";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import StatPoint from "./StatPoint";
import {
  addStatPoint,
  removeStatPoint,
  changeCharacter,
  setHeroBackground,
} from "../../Store/hero-slice";
import HeroCard from "../UI/HeroCard";

const CreateHero = (props) => {
  const currentHero = useSelector((state) => state.hero);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  console.log("heroStats", currentHero);
  const heroStats = currentHero.mainHero.stats;
  const points = currentHero.mainHero.extras.statPoints;
  let inputtedUrl = url.toString();
  let value = 1;
  const fallbackBackground = {
    style: {
      backgroundImage: `url(https://cdn.pixabay.com/photo/2015/05/14/15/55/character-766935_960_720.jpg)`,
    },
  };

  // could have an array or object that these add/remove handlers append to which then when submitted gets sent to the redux store, atm we're just changing the state on the go.
  const removePointHandler = (id) => {
    console.log("removePoint");
    dispatch(removeStatPoint({ id: id, value: value }));
  };
  const addPointHandler = (id) => {
    console.log("addPoint");
    dispatch(addStatPoint({ id: id, value: value }));
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let heroName = name.toString();
    if (!heroName) {
      heroName = "Hero";
    }

    dispatch(changeCharacter({ heroName }));
    props.onClose();
    if (inputtedUrl === "") {
      dispatch(setHeroBackground(fallbackBackground));
      return;
    }
    dispatch(
      setHeroBackground({ style: { backgroundImage: `url(${inputtedUrl})` } })
    );
  };
  const urlChangeHandler = (event) => {
    setUrl(event.target.value);
  };
  const styleChangeHandler = (event) => {
    event.preventDefault();
    if (inputtedUrl === "") {
      dispatch(setHeroBackground(fallbackBackground));
      return;
    }
    dispatch(
      setHeroBackground({ style: { backgroundImage: `url(${inputtedUrl})` } })
    );
  };

  // Hopefully this is 2 way binding? -Update: Changed all this but keeping for interest reasons

  // const onChangeHandler = (id, value) => {
  //   const statIndex = stats.findIndex((stat) => stat.id === id);
  //   const changedStats = stats;
  //   changedStats[statIndex].value = value;
  //   setStats(changedStats);
  //   console.log("changedStats", changedStats[statIndex].value);

  // for (let i = 0, l = stats.items.length; i < l; i++) {
  //   if ()
  // }
  // };

  //   const objectMap = (obj, fn) =>
  //     Object.fromEntries(
  //       Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)])
  //     );

  //   const statPoints = objectMap(DUMMYHERO_DATA.stats, (item) => {
  //     <StatPoint value={item.str} points={points} />;
  //   });
  const statPoints = heroStats.map((stat) => (
    <StatPoint
      id={stat.id}
      key={stat.id}
      points={points}
      value={stat.value}
      removePoint={removePointHandler}
      addPoint={addPointHandler}
    />
  ));

  return (
    <Modal>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.container}>
          <HeroCard
            onClick={props.onClick}
            buttonText={props.buttonText}
            disabled={props.disabled}
            style={currentHero.mainHero.style}
          />
          {!currentHero.mainHero.characterCreated && (
            <input
              id="name"
              type="text"
              onChange={nameChangeHandler}
              placeholder="Enter your hero name."
              value={name}
              className={classes.input}
            />
          )}
        </div>

        {statPoints}

        <div className={classes.container}>
          {`Available Points: ${points}`} <Button>Submit</Button>
        </div>
        <div className={classes.styleContainer}>
          <p>Pick hero avatar:</p>
          <input
            id="url"
            type="text"
            onChange={urlChangeHandler}
            placeholder="Enter your custom image URL"
            value={url}
            className={classes.input}
          />
          <Button onClick={styleChangeHandler}>Test avatar</Button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateHero;
