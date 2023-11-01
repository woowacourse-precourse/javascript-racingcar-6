import Car from './Car';
import CONSTANTS from '../utils/Constants';

class RacingCar {
  constructor(carNamesArray) {
    this.cars = carNamesArray.map((carName) => new Car(carName));
    this.totalProgressStatus = [];
  }

  tryProgress(trialCount) {
    for (let i = 1; i <= trialCount; i += 1) {
      this.progressCars();
      this.pushEachProgressStatus();
    }
  }

  progressCars() {
    this.cars.forEach((car) => {
      car.progressDependingOnValue();
    });
  }

  pushEachProgressStatus() {
    const eachProgressStatus = this.cars.map((car) => car.getProgressStatus());
    this.totalProgressStatus.push(eachProgressStatus);
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
