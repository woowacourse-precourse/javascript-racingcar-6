import Car from './Car';
import MESSAGES from '../utils/Messages';

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
}

export default RacingCar;
