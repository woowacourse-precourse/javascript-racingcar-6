import RacingCar from './RacingCar';

class RacingGame {
  #cars;
  #winners;

  constructor(names) {
    this.#cars = names.map((item) => new RacingCar(item));
    this.#winners = [];
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
