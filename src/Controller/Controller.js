import InputView from '../View/InputView.js';
import Car from '../Model/Car.js';
import OutputView from '../View/OutputView.js';
import Result from '../Model/Result.js';
import Validator from './Validator.js';

const COMMA = ',';

export default class Controller {
  constructor() {
    this.cars = [];
    this.winners = [];
    this.rounds = 0;
    this.result = new Result();
  }

  static validate(input, validateFunction) {
    try {
      validateFunction(input);
    } catch (error) {
      throw new Error(error);
    }
  }

  async startGame() {
    await this.initializeCars();
    await this.initializeRounds();

    this.startRun();
  }

  async initializeCars() {
    const carsInput = await InputView.readCarNames();
    const carNames = this.splitByComma(carsInput);
    Controller.validate(carNames, Validator.validateNames);

    carNames.map((name) => {
      this.cars.push(new Car(name));
    });
  }

  async initializeRounds() {
    const rounds = await InputView.readRoundCounts();
    Controller.validate(rounds, Validator.validateRounds);
    this.rounds = rounds;
  }

  startRun() {
    this.iterateCarInRounds(this.rounds);
    this.winners = this.result.getWinners(this.cars);

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

  splitByComma(array) {
    return array.split(COMMA);
  }
}