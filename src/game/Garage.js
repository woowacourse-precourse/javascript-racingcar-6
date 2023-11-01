import Car from './Car.js';

class Garage {
  #carList = [];

  constructor(nameList) {
    nameList.forEach((name) => {
      this.#registerCar(name);
    });
  }

  #registerCar(name) {
    this.#carList.push(new Car(name));
  }

  #getMaxStepCount() {
    return this.#carList.reduce(
      (max, car) => Math.max(max, car.compareAndUpdateMaxStepCount(max)),
      0,
    );
  }

  findCarNamesWithMaxSteps() {
    const maxStepCount = this.#getMaxStepCount();
    const names = [];

    this.#carList.forEach((car) => {
      const name = car.isStepCountEqualToMax(maxStepCount);
      if (name) names.push(name);
    });

    return Array.from(names);
  }

  tryAllCarsMove() {
    this.#carList.forEach((car) => {
      car.tryToMove();
    });
  }

  displayCarStateList() {
    this.#carList.forEach((car) => {
      car.printStepState();
    });
  }
}
export default Garage;