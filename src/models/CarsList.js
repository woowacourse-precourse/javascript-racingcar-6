import { moveCount } from './moveCar';

export const carsList = (carName, round) => {
  const nameArray = String(carName).split(',');
  const cars = {};

  nameArray.forEach((car) => {
    cars[car] = '';
  });

  moveCount(cars, round);
};
