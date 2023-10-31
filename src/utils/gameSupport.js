import Car from "../Car.js";

export const getCarsClassArray = (carsStringNameArray) => {
  return carsStringNameArray.map((carName) => new Car(carName));
};


