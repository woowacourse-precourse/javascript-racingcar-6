import RacingCar from './RacingCar.js';

class RacingResult {
  #carNames;

  #moveCount;

  #racingCarInfos;

  constructor(carNames, moveCount) {
    this.#carNames = carNames;
    this.#moveCount = moveCount;
    this.#racingCarInfos = this.#initializeRacingCarInfos();
  }

  static of(carNames, moveCount) {
    return new RacingResult(carNames, moveCount);
  }

  #initializeRacingCarInfos() {
    return this.#carNames.map((carName) => ({ carName, position: 0 }));
  }

  #updateRacingResult() {
    this.#racingCarInfos = this.#racingCarInfos.map((racingCarInfo) =>
      RacingCar.from(racingCarInfo).move(),
    );
  }

  calculateRacingResult() {
    return Array.from({ length: this.#moveCount }, () => {
      this.#updateRacingResult();
      return [...this.#racingCarInfos];
    });
  }
}

export default RacingResult;
