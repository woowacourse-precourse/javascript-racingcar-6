import RacingCar from './RacingCar.js';

class RacingGame {
  #carNames;

  #moveCount;

  #racingStatus;

  constructor(carNames, moveCount) {
    this.#carNames = carNames;
    this.#moveCount = moveCount;
    this.#racingStatus = this.#initializeRacingStatus();
  }

  static of(carNames, moveCount) {
    return new RacingGame(carNames, moveCount);
  }

  #initializeRacingStatus() {
    return this.#carNames.map((carName) => ({ carName, position: 0 }));
  }

  #updateRacingResult() {
    this.#racingStatus = this.#racingStatus.map((currentRacingCarInfo) =>
      RacingCar.from(currentRacingCarInfo).move(),
    );
  }

  play() {
    return Array.from({ length: this.#moveCount }, () => {
      this.#updateRacingResult();
      return [...this.#racingStatus];
    });
  }
}

export default RacingGame;
