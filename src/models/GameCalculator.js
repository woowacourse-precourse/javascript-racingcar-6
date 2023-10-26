import { Random } from "@woowacourse/mission-utils";
import { MIN_NUMBER, MAX_NUMBER } from "../constants/Constants.js";

const computerPick = (currentPosition) => {
  const randomNumber = Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
  return currentPosition + 1;
};

const isAdvanceCar = (currentPosition) => {
  return computerPick(currentPosition);
};

const GameCalculator = (cars, attemps) => {
  let carPositions = { ...cars };
  for (let cnt = 0; cnt < attemps; cnt++) {
    for (const car in carPositions) {
      carPositions[car] = isAdvanceCar(carPositions[car]);
    }
  }
  return carPositions;
};

export default GameCalculator;
