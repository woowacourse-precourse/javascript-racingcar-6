import RacingResult from './PlayRacingCar.js';
import MakeRandomNumber from './MakeRandomNumber.js';

class CarController {
  constructor(splitCarName) {
    this.names = splitCarName;
    this.cars = [];
    this.printCars = [];
    this.createObject();
  }

  createObject() {
    this.names.map((name) => this.cars.push(new RacingResult(name)));
  }

  playAdvance() {
    this.cars.forEach((car) => car.advanceIfOverFour(MakeRandomNumber()));
  }

  advanceResult() {
    this.cars.map((car) => this.printCars.push(car.printAdvanceResult()));
    return this.printCars;
  }

  return() {
    return this.cars;
  }
}
export default CarController;
