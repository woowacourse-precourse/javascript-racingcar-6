import InputView from '../view/InputView';
import OutputView from '../view/OutputView';
import { randomMovementStrategy } from '../model/movementStrategies';
import Car from '../model/Car';
import Race from '../model/Race';
import InputValidator from '../utils/InputValidator';
import processCarNames from '../utils/CarNameProcessor';
import { GameSettings } from '../constants/GameSettings';

export default class RacingGameController {
  #race;

  #rounds;

  async start() {
    await this.#initializeGame();
    this.#runRace();
    this.#displayWinners();
  }

  async #initializeGame() {
    const carNames = await this.#createCarNames();
    this.#rounds = await this.#createRounds();
    this.#race = this.#initializeRace(carNames);
  }

  async #createCarNames() {
    const carNamesInput = await InputView.printCarNames();
    const processedNames = processCarNames(carNamesInput);
    InputValidator.validateNumberOfCars(processedNames.length);
    processedNames.forEach((name) => InputValidator.validateCarName(name));
    return processedNames;
  }

  async #createRounds() {
    const rounds = await InputView.printNumberOfRounds();
    InputValidator.validateNumberOfRounds(rounds);
    return rounds;
  }

  #initializeRace(carNames) {
    const cars = carNames.map((name) => new Car(name, randomMovementStrategy));
    return new Race(cars);
  }

  #runRace() {
    OutputView.printRaceHeader();
    this.#executeRounds();
  }

  #executeRounds() {
    Array.from({ length: this.#rounds }).forEach(() => {
      this.#race.playRound();
      const roundResults = this.#createRoundResults();
      OutputView.printRoundResult(roundResults);
    });
  }

  #createRoundResults() {
    return this.#race.getRoundResults().map((result) => ({
      name: result.name,
      representation: GameSettings.FORWARD_MOVE_REPRESENTATION.repeat(result.position),
    }));
  }

  #displayWinners() {
    const winnersString = this.#race.getWinnersString();
    OutputView.printWinners(winnersString);
  }
}
