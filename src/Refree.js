import Car from './Car';

class Refree {
  #carList = new Map();

  registerCars(carNames) {
    carNames.split(',').forEach((car) => {
      this.#carList.set(car, new Car(car));
    });
  }
}

export default Refree;
