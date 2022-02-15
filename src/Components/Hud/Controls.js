import { useState } from "react";

import classes from "./Controls.module.css";
import CreateHero from "../Hero/CreateHero";
import Button from "../UI/Button";
// import { useDispatch } from "react-redux";
// import { increment } from "../../Store/location-slice";
const Controls = () => {
  const [isModal, setIsModal] = useState(false);
  // const dispatch = useDispatch();

  // const onClickHandler = () => {
  //   dispatch(increment());
  //   console.log("clicked!");
  // };
  const hideModalHandler = () => {
    setIsModal(false);
  };
  const showModalHandler = () => {
    setIsModal(true);
  };
  return (
    <>
      {isModal && <CreateHero onClose={hideModalHandler} />}
      <div className={classes.controls}>
        <Button onClick={showModalHandler}>Create Hero</Button>
      </div>
    </>
  );
};

export default Controls;
