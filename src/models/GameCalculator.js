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
  let obj = {};

  arr.forEach((item) => {
    obj[item] = 0;
  });
  return obj;
};

const gameResult = (cars, attemps) => {
  let carPositions = arrayToObject(cars);

  for (let cnt = 0; cnt < attemps; cnt++) {
    for (const car in carPositions) {
      carPositions[car] = isAdvanceCar(carPositions[car]);
    }
    ConsoleOutput.printGameResult(carPositions);
    ConsoleOutput.printEmptyLine();
  }
  return carPositions;
};

const gameWinner = (carPositions) => {
  const maxPosition = Math.max(...Object.values(carPositions));
  let winners = [];

  for (const car in carPositions) {
    if (carPositions[car] === maxPosition) {
      winners.push(car);
    }
  }
  return winners;
};

const GameCalculator = (cars, attempts) => {
  const carPositions = gameResult(cars, attempts);
  const winners = gameWinner(carPositions);
  ConsoleOutput.printGameWinner(winners);
};

export default GameCalculator;
export { computerPick, gameResult, gameWinner };
