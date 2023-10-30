class Race {
  constructor(cars) {
    this.cars = cars;
  }

  progressRound() {
    this.cars.forEach((car) => car.attemptMove());
  }

  getRoundResult() {
    return this.cars.map((car) => {
      return {
        name: car.getName(),
        position: car.getPosition(),
      };
    });
  }

  getMaxPosition() {
    return Math.max(...this.cars.map((car) => car.getPosition()));
  }

  getWinners() {
    return this.cars
      .filter((car) => car.getPosition() === this.getMaxPosition())
      .map((car) => car.getName());
  }
}

export default Race;
