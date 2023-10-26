class RacingGame {
  #cars;
  #winners;

  constructor() {
    this.#winners = [];
  }

  setCars(cars) {
    this.#cars = cars;
  }

  moveAllCars() {
    this.#cars.forEach((car) => car.move());
    return this.#cars.map((car) => car.getMoveResult()).join(`\n`);
  }

  setWinners() {
    const maxPosition = this.#cars.reduce((max, car) => {
      return car.getPosition() > max ? car.getPosition() : max;
    }, 0);

    this.#winners = this.#cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());
  }

  getWinners() {
    return this.#winners;
  }
}

export default RacingGame;
