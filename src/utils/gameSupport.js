import { moveCount } from "./move.js";
import Car from "../Car.js";

export const getCarsClassArray = (carsStringNameArray) => {
  return carsStringNameArray.map((carName) => new Car(carName));
};

const setCarsMoveCount = (cars) => {
  for (const car of cars) {
    if (moveCount()) car.setMoveCount();
  }
};

const printCarsCurrentPosition = (cars) => {
  for (const car of cars) {
    const carName = car.getCarName();
    const movePrint = car.getCount();
    const currentMove = Array.from({ length: movePrint }, () => "-").join("");
    MissionUtils.Console.print(`${carName} ${COLON} ${currentMove}`);
  }
};

export const getMatchResult = (cars, trialCountNumber) => {
  }
