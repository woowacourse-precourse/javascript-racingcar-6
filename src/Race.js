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

  getWinners() {
    const maxTrackLength = Math.max(...this.cars.map((car) => car.track.length));
    return this.cars.filter((car) => car.track.length === maxTrackLength).map((car) => car.name);
  }
}

export default Race;
