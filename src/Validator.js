import { CAR_NAME_LENGTH_ERROR, INVALID_INPUT_TYPE, INVALID_MOVE_COUNT } from "./Constants/Error.js";

function checkInputRaceCars(raceCar) {
  raceCar.forEach((car) => {
    if (car.length > 5)
      throw new Error(CAR_NAME_LENGTH_ERROR);
  })
}

function checkInputMoveCount(moveCount) {
  if (moveCount <= 0) {
    throw new Error(INVALID_MOVE_COUNT);
  }
  if (isNaN(moveCount)) {
    throw new Error(INVALID_INPUT_TYPE);
  }
}

export { checkInputRaceCars, checkInputMoveCount };
