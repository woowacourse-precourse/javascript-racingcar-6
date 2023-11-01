class RacingGame {
  #cars;
  #winners;
  #maxPosition;

  constructor() {
    this.#winners = [];
    this.#maxPosition = 0;
  }

  #setMaxPosition() {
    this.#maxPosition = this.#cars.reduce((max, car) => {
      return car.getPosition() > max ? car.getPosition() : max;
    }, 0);
  }

  #setWinners() {
    this.#winners = this.#cars
      .filter(car => car.getPosition() === this.#maxPosition)
      .map(car => car.getName());
  }

  setCars(cars) {
    this.#cars = cars;
  }

  moveAllCars() {
    this.#cars.forEach(car => car.move());
  }

  getAllCarsMovementHistory() {
    return this.#cars.map(car => car.getMovementHistory()).join(`\n`);
  }

  concludeGame() {
    this.#setMaxPosition();
    this.#setWinners();
  }

  getWinners() {
    return this.#winners;
  }
}

export default RacingGame;
