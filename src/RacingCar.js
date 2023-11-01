import Car from './Car';
import CONSTANTS from '../utils/Constants';

class RacingCar {
  constructor(carNamesArray) {
    this.cars = carNamesArray.map((carName) => new Car(carName));
    this.totalProgressStatus = [];
  }

  tryProgress() {
    this.progressCars();
    this.pushEachProgressStatus();
  }

  progressCars() {
    this.cars.forEach((car) => {
      car.progressDependingOnValue();
    });
  }

  pushEachProgressStatus() {
    this.totalProgressStatus = this.cars.map((car) => car.getProgressStatus());
  }

  getTotalProgressStatus() {
    return this.totalProgressStatus;
  }

  getWinner() {
    const carsArray = this.cars
      .map((car) => [car[CONSTANTS.nameKey], car[CONSTANTS.progressStatusKey]])
      .sort((carA, carB) => carB[1] - carA[1]);
    return carsArray.filter((car) => car[1] === carsArray[0][1]).map((car) => car[0]);
  }
}

export default RacingCar;
