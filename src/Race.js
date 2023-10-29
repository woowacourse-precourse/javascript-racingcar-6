import Car from './Car.js';

class Race {
  constructor(names) {
    this.cars = names.map((name) => new Car(name));
  }

  moveAllCars() {
    this.cars.forEach((car) => {
      car.move();
    });
  }
}

export default Race;
