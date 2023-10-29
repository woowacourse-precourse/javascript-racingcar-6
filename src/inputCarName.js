import { readLineCar, readLineGameCount } from './utils.js';

function inputCarName() {
  return readLineCar().then((inputCar) => {
    const carNames = inputCar.split(',');
    const cars = {};
    carNames.forEach((name) => {
      cars[`${name.trim()}`] = '';
    });
    console.log(cars);
    return cars;
  });
}

export default inputCarName;
