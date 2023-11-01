import Car from "./Car.js";

class RaceGame {
  constructor() {
    this.cars = [];
    this.rounds = 0;
  }

  setCars(carNames) {
    this.cars = carNames.map((name) => new Car(name));
  }

  setRounds(rounds) {
    this.rounds = rounds;
  }

  playRound() {
    this.cars.forEach((car) => car.move());
  }

  getCurrentState() {
    return this.cars.map((car) => ({
      name: car.getName(),
      position: car.getPosition(),
    }));
  }

  getWinner() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    return this.cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());
  }
}

module.exports = RaceGame;
