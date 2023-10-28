import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Car from '../model/Car.js';
import Race from '../model/Race.js';
import InputValidator from '../utils/InputValidator.js';
import { randomMovementStrategy } from '../model/movementStrategies.js';
import { processCarNames } from '../utils/CarNameProcessor.js';

export default class RacingGameController {
  async start() {
    const carNames = await this.#createCarNames();
    const rounds = await this.#createRounds();
    const race = this.#initializeRace(carNames, rounds);

    this.#runRace(race, rounds);
    this.#displayWinners(race);
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

  #initializeRace(carNames, rounds) {
    const cars = carNames.map((name) => new Car(name, randomMovementStrategy));
    return new Race(cars, rounds);
  }

  #runRace(race, rounds) {
    OutputView.printRaceHeader();
    Array.from({ length: rounds }).forEach(() => {
      race.playRound();
      const roundResults = race.getRoundResults();
      OutputView.printRoundResult(roundResults);
    });
  }

  #displayWinners(race) {
    const winnersString = race.getWinnersString();
    OutputView.printWinners(winnersString);
  }
}
