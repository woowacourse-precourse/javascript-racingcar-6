import Car from './Car';

class RacingCar {
  constrcutor() {
    this.cars = [];
  }
  generateCars(carNamesArray) {
    carNamesArray.forEach((carName) => this.cars.push(new Car(carName)));
  }
  progressCars() {
    this.cars.forEach((car) => car.progressDependingOnValue());
  }
}

export default RacingCar;
