import InputView from '../view/InputView';
import OutputView from '../view/OutputView';
import { randomMovementStrategy } from '../model/movementStrategies';
import Car from '../model/Car';
import Race from '../model/Race';
import InputValidator from '../utils/InputValidator';
import processCarNames from '../utils/CarNameProcessor';
import { GameSettings } from '../constants/GameSettings';

export default class RacingGameController {
  async start() {
    const carNames = await this.#createCarNames();
    const rounds = await this.#createRounds();
    const race = this.#initializeRace(carNames);

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

  #initializeRace(carNames) {
    const cars = carNames.map((name) => new Car(name, randomMovementStrategy));
    return new Race(cars);
  }

  #runRace(race, rounds) {
    OutputView.printRaceHeader();
    this.#executeRounds(race, rounds);
  }

  #executeRounds(race, rounds) {
    Array.from({ length: rounds }).forEach(() => {
      race.playRound();
      const roundResults = this.#createRoundResults(race);
      OutputView.printRoundResult(roundResults);
    });
  }

  #createRoundResults(race) {
    return race.getRoundResults().map((result) => ({
      name: result.name,
      representation: GameSettings.FORWARD_MOVE_REPRESENTATION.repeat(result.position),
    }));
  }

  #displayWinners(race) {
    const winnersString = race.getWinnersString();
    OutputView.printWinners(winnersString);
  }
}
