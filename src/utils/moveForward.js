import CONDITIONS from "../constants/Conditions.js";

const moveForward = (number) => {
  return number >= CONDITIONS.MOVE_FORWARD ? true : false;
};

export default moveForward;
