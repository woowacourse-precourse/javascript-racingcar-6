import { readLineCar } from './utils.js';

function inputCarName() {
  return readLineCar().then((inputCar) => {
    const carNames = inputCar.split(',');
    const cars = {};
    carNames.forEach((name) => {
      cars[`${name.trim()}`] = '';
    });
    return cars;
  });
}

export default inputCarName;
