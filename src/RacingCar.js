import Car from './Car';
import MESSAGES from '../utils/Messages';

class RacingCar {
  constructor() {
    this.cars = [];
    this.totalProgressStatus = [];
  }
  generateCars(carNamesArray) {
    carNamesArray.forEach((carName) => this.cars.push(new Car(carName)));
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
}

export default RacingCar;
