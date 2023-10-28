export default class Race {
  #cars;
  #rounds;

  constructor(cars, rounds) {
    this.#cars = cars;
    this.#rounds = rounds;
  }

  playRound() {
    this.#cars.forEach((car) => car.move());
  }

  getRoundResults() {
    return this.#cars.map((car) => {
      return { name: car.name, representation: car.getRepresentation() };
    });
  }

  getWinners() {
    const maxPosition = Math.max(...this.#cars.map((car) => car.position));
    return this.#cars.filter((car) => car.position === maxPosition).map((car) => car.name);
  }

  getWinnersString() {
    const winners = this.getWinners();
    return winners.join(', ');
  }
}
