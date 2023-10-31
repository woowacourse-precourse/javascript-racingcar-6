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

export const getMatchResult = (cars, trialCountNumber) => {
  }
