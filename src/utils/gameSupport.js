import Car from "../Car.js";

export const getCarsClassArray = (carsStringNameArray) => {
  return carsStringNameArray.map((carName) => new Car(carName));
};

export const getMatchResult = (cars, trialCountNumber) => {
  }
