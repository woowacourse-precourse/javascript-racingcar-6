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

  getWinners() {
    const maxDistance = Math.max(...this.cars.map((car) => car.getDistance()));
    return this.cars.filter((car) => car.getDistance() === maxDistance);
  }
}

export default Model;
