import { getDistance } from "./utils/getDistance.js";

export const Car = {
  createCars: (carName) => {
    return carName.map((name) => {
      return { name: name, race: "" };
    });
  },
  addRace: (cars) => {
    return cars.map((car) => {
      return { name: car.name, race: (car.race += getDistance()) };
    });
  }
};