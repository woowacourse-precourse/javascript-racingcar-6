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
}
export default Garage;