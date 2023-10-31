import Car from './Car.js';

class Model {
  constructor() {
    this.cars = [];
  }

  addCar(names) {
    names.forEach((name) => {
      this.cars.push(new Car(name));
    });

    return this;
  }

  goCars() {
    this.cars.forEach((car) => {
      car.move();
    });

    return this;
  }

  getCars() {
    return this.cars;
  }
}

export default Model;
