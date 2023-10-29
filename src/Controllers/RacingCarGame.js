import { InputView, OutputView } from "../Views";
import { Car, RaceRound } from "../Models";

export default class RacingCarGame {
  constructor() {
    this.cars = [];
    this.raceround;
  }

  async start() {
    await this.#setupCars();
    await this.#setupRaceRound();
    this.#runRaces();
    const winners = this.#getWinner();
    OutputView.printWinner(winners);
  }

  async #setupCars() {
    const carNamesInput = await InputView.promptCarNames();
    Array.from(carNamesInput, (carName) => {
      this.cars.push(new Car(carName));
    });
  }

  async #setupRaceRound() {
    const raceround = await InputView.promptRaceRound();
    this.raceround = new RaceRound(raceround).raceRound;
  }

  #runRaces() {
    Array.from({ length: this.raceround }, () => {
      this.#executeRace();
      this.#displayRaceResults();
    });
  }

  #executeRace() {
    Array.from(this.cars, (car) => {
      car.race();
    });
  }

  #displayRaceResults() {
    const carsStatus = this.#getCarsStatus();
    OutputView.printOneRound(carsStatus);
  }

  #getCarsStatus() {
    const carsStatus = [];
    Array.from(this.cars, (car) => {
      const carStus = car.getStatus();
      carsStatus.push(carStus);
    });
    return carsStatus;
  }

  #getWinner() {
    const carsStatus = this.#getCarsStatus();
    const maxDistance = Math.max(...carsStatus.map((car) => car.totalDistance));

    const winners = carsStatus
      .filter((car) => car.totalDistance === maxDistance)
      .map((car) => car.name);

    return winners.join(", ");
  }
}
