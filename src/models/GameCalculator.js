import { Random } from "@woowacourse/mission-utils";
import { MIN_NUMBER, MAX_NUMBER } from "../constants/Constants.js";
import ConsoleOutput from "../views/ConsoleOutput.js";

const computerPick = (currentPosition) => {
  const randomNumber = Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
  if (randomNumber >= 4) {
    return currentPosition + 1;
  }
  return currentPosition;
};

const isAdvanceCar = (currentPosition) => {
  return computerPick(currentPosition);
};

const arrayToObject = (arr) => {
  let obj = arr.reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {});
  return obj;
};

const GameCalculator = (cars, attemps) => {
  let carPositions = arrayToObject(cars);

  for (let cnt = 0; cnt < attemps; cnt++) {
    for (const car in carPositions) {
      carPositions[car] = isAdvanceCar(carPositions[car]);
    }
    ConsoleOutput.printGameResult(carPositions);
    ConsoleOutput.printEmptyLine();
  }
};

export default GameCalculator;
