import { CAR_NAME_LENGTH_ERROR, INVALID_INPUT_TYPE, INVALID_MOVE_COUNT } from "./Constants/Error.js";
import { MAX_STRING_LENGTH, MIN_MOVE_COUNT } from "./Constants/constant.js";

function checkInputRaceCars(raceCar) {
  raceCar.forEach((car) => {
    if (car.length > MAX_STRING_LENGTH)
      throw new Error(CAR_NAME_LENGTH_ERROR);
  })
}

function checkInputMoveCount(moveCount) {
  if (moveCount < MIN_MOVE_COUNT) {
    throw new Error(INVALID_MOVE_COUNT);
  }
  if (isNaN(moveCount)) {
    throw new Error(INVALID_INPUT_TYPE);
  }
}

export { checkInputRaceCars, checkInputMoveCount };
