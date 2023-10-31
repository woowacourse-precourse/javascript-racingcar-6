import Car from "./Car";

class RacingGame {
  constructor(carNames, raceRounds) {
    this.cars = carNames.map((name) => new Car(name));
    this.rounds = raceRounds;
  }
}

export default RacingGame;
