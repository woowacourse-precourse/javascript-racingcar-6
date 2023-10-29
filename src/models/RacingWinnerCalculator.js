import { SYMBOLS } from '../constants/symbols.js';

class RacingWinnerCalculator {
  #racingResult;

  constructor(racingResult) {
    this.#racingResult = [...racingResult];
  }

  static from(racingResult) {
    return new RacingWinnerCalculator(racingResult);
  }

  #sortRacingResultPositionByDescending() {
    this.#racingResult = this.#racingResult.sort(
      (elementA, elementB) => elementB.position - elementA.position,
    );
    return this;
  }

  #filterTopPositionCars() {
    const topPosition = this.#racingResult.at(0).position;
    this.#racingResult = this.#racingResult.filter(({ position }) => position === topPosition);
    return this;
  }

  #extractWinnerNames() {
    return this.#racingResult.map(({ carName }) => carName);
  }

  calculateRacingWinners() {
    return this.#sortRacingResultPositionByDescending()
      .#filterTopPositionCars()
      .#extractWinnerNames()
      .join(`${SYMBOLS.comma} `);
  }
}

export default RacingWinnerCalculator;
