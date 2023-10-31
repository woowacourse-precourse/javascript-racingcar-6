export default class Race {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  playRound() {
    this.#cars.forEach((car) => car.move());
  }

  getRoundResults() {
    return this.#cars.map((car) => {
      const { name, position } = car.getCarInformation();
      return {
        name,
        position,
      };
    });
  }

  getWinners() {
    const maxPosition = Math.max(...this.#cars.map((car) => car.getCarInformation().position));
    return this.#cars
      .filter((car) => car.getCarInformation().position === maxPosition)
      .map((car) => car.getCarInformation().name);
  }

  getWinnersString() {
    const winners = this.getWinners();
    return winners.join(', ');
  }
}
