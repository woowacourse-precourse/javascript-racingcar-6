import RacingCar from './RacingCar.js';
import MakeRandomNumber from './MakeRandomNumber.js';

class CarController {
  constructor(splitCarName) {
    this.names = splitCarName;
    this.cars = [];
    this.printCars = [];
    this.createObject();
  }

  createObject() {
    this.names.map((name) => this.cars.push(new RacingCar(name.trim())));
  }

  playAdvance() {
    this.cars.forEach((car) => car.advanceIfOverFour(MakeRandomNumber()));
  }

  advanceResult() {
    this.cars.map((car) => this.printCars.push(car.printAdvanceResult()));
    return this.printCars;
  }

  racingResult() {
    const carsData = {};
    this.cars.forEach((car) => {
      carsData[car.name] = car.advance;
    });
    return carsData;
  }
}
export default CarController;
