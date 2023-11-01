import Car from './Car';

class Race {
  constructor(cars) {
    this.cars = cars.map((name) => new Car(name));
  }

  playTurn() {
    this.cars.forEach((car) => car.move());
  }

  getWinners() {
    const maxDistance = Math.max(...this.cars.map((car) => car.distance));
    return this.cars
      .filter((car) => car.distance === maxDistance)
      .map((car) => car.name);
  }

  printStatus() {
    this.cars.forEach((car) => {
      console.log(`${car.name} : ${car.getDistance()}`);
    });
  }
}

export default Race;
