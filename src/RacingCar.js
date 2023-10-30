import Car from './Car';
import MESSAGES from '../utils/Messages';
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
    const eachProgressStatus =
      this.cars.map((car) => car.getProgressStatus()).join(MESSAGES.lineBreak) + MESSAGES.lineBreak;
    this.totalProgressStatus.push(eachProgressStatus);
  }
  getTotalProgressStatus() {
    const totalProgressStatusString = this.totalProgressStatus.join(MESSAGES.lineBreak);
    return MESSAGES.result + totalProgressStatusString;
  }
  getWinner() {
    const carsArray = this.cars
      .map((car) => [car[CONSTANTS.nameKey], car[CONSTANTS.progressStatusKey]])
      .sort((carA, carB) => carB[1] - carA[1]);
  }
}

export default RacingCar;
