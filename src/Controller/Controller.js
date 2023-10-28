import InputView from '../View/InputView.js';
import Car from '../Model/Car.js';
import OutputView from '../View/OutputView.js';
import { getWinners } from '../Model/Result.js';

export default class Controller {
  constructor() {
    this.cars = [];
    this.winners = [];
    this.rounds = 0;
  }

  async startGame() {
    const carNames = await InputView.readCarNames();
    const rounds = await InputView.readRoundCounts();
    this.initializeCars(carNames);
    this.rounds = rounds;

    this.startRun();
  }

  initializeCars(carNames) {
    carNames.split(",").map((name) => {
      this.cars.push(new Car(name));
    });
  }

  startRun() {
    this.iterateCarInRounds(this.rounds);
    this.winners = getWinners(this.cars);

    OutputView.printWinners(this.winners);
  }

  iterateCarInRounds(rounds) {
    OutputView.printExecutionMessage();
    Array.from({ length: this.rounds }, (_) => {
      this.startRound();
    });
  }

  startRound() {
    this.cars.map((car) => {
      car.attemptForward();
      OutputView.print(`${car.name} : ${car.distance}`);
    });
    OutputView.printEndOfRound();
  }
}