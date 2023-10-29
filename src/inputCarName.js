import { readLineCar } from './utils.js';

function inputCarName() {
  readLineCar().then((inputCar) => {
    const carNames = inputCar.split(',');
    const cars = {};
    carNames.forEach((name) => {
      cars[`${name.trim()}`] = '';
    });
    console.log(cars);
  });
}

inputCarName();
