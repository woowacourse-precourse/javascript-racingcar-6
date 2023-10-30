import { RANDOM_NUMBER_RANGE } from '../constants/random.js';
import { pickRandomNumberInRange } from '../utils/random.js';
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
    const { minNumber, maxNumber } = RANDOM_NUMBER_RANGE;
    this.#racingStatus = this.#racingStatus.map((currentRacingCarInfo) =>
      RacingCar.from(currentRacingCarInfo).move(pickRandomNumberInRange(minNumber, maxNumber)),
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
