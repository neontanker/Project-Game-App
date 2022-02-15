import { useDispatch, useSelector } from "react-redux";
import { toggleFight } from "../../../Store/location-slice";
import Modal from "../../UI/Modal";

const EndFightScreen = (props) => {
  const endFightMessage = useSelector(
    (state) => state.currentLocation.endFightMessage
  );
  const dispatch = useDispatch();
  const onToggleModal = () => {
    dispatch(toggleFight());
  };
  return (
    <Modal onClick={onToggleModal}>
      <p>{endFightMessage}</p>
    </Modal>
  );
};

export default EndFightScreen;
