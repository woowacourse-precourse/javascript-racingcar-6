import { SYMBOLS } from '../constants/symbols.js';

class RacingWinnerCalculator {
  #lastRacingStatus;

  constructor(lastRacingStatus) {
    this.#lastRacingStatus = [...lastRacingStatus];
  }

  static from(lastRacingStatus) {
    return new RacingWinnerCalculator(lastRacingStatus);
  }

  #sortLastRacingStatusPositionByDescending() {
    this.#lastRacingStatus = this.#lastRacingStatus.sort(
      (elementA, elementB) => elementB.position - elementA.position,
    );
    return this;
  }

  #filterTopPositionCars() {
    const topPosition = this.#lastRacingStatus.at(0).position;
    this.#lastRacingStatus = this.#lastRacingStatus.filter(
      ({ position }) => position === topPosition,
    );
    return this;
  }

  #extractWinnerNames() {
    return this.#lastRacingStatus.map(({ carName }) => carName);
  }

  calculateRacingWinners() {
    return this.#sortLastRacingStatusPositionByDescending()
      .#filterTopPositionCars()
      .#extractWinnerNames()
      .join(`${SYMBOLS.comma} `);
  }
}

export default RacingWinnerCalculator;
