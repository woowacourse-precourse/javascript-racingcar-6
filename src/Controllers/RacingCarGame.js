import InputView from "../Views/InputView.js";
import Car from "../Models/Car.js";
import OutputView from "../Views/OutputView.js";
import RaceRound from "../Models/RaceRound.js";

export default class RacingCarGame {
  constructor() {
    this.cars = [];
    this.raceround;
  }

  async setupCars() {
    const carNamesInput = await InputView.promptCarNames();
    Array.from(carNamesInput, (carName) => {
      this.cars.push(new Car(carName));
    });
  }

  async setupRaceRound() {
    const raceround = await InputView.promptRaceRound();
    this.raceround = new RaceRound(raceround).raceRound;
  }

  executeRace() {
    Array.from(this.cars, (car) => {
      car.race();
    });
  }

  getCarsStatus() {
    const carsStatus = [];
    Array.from(this.cars, (car) => {
      const carStus = car.getStatus();
      carsStatus.push(carStus);
    });
    return carsStatus;
  }

  displayRaceResults() {
    const carsStatus = this.getCarsStatus();
    OutputView.printOneRound(carsStatus);
  }

  runRaces() {
    Array.from({ length: this.raceround }, () => {
      this.executeRace();
      this.displayRaceResults();
    });
  }

  getWinner() {
    const carsStatus = this.getCarsStatus();
    const maxDistance = Math.max(...carsStatus.map((car) => car.totalDistance));

    const winners = carsStatus
      .filter((car) => car.totalDistance === maxDistance)
      .map((car) => car.name);

    return winners.join(", ");
  }

  async start() {
    await this.setupCars();
    await this.setupRaceRound();
    this.runRaces();
    const winners = this.getWinner();
    OutputView.printWinner(winners);
  }
}
