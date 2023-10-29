import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUMBER_RANGE } from '../constants/random.js';

class RacingCar {
  static MOVE_THRESHOLD = 4;

  static MAX_CAR_NAME_LENGTH = 5;

  #racingCarInfo;

  #randomNumberGenerator;

  constructor(racingCarInfo, randomNumberGenerator = Random.pickNumberInRange) {
    this.#racingCarInfo = { ...racingCarInfo };
    this.#randomNumberGenerator = randomNumberGenerator;
  }

  static from(racingCarInfo, randomNumberGenerator = Random.pickNumberInRange) {
    return new RacingCar(racingCarInfo, randomNumberGenerator);
  }

  move() {
    const { position: prevPosition } = this.#racingCarInfo;
    const { minNumber, maxNumber } = RANDOM_NUMBER_RANGE;
    const randomNumber = this.#randomNumberGenerator(minNumber, maxNumber);
    return randomNumber >= RacingCar.MOVE_THRESHOLD
      ? { ...this.#racingCarInfo, position: prevPosition + 1 }
      : this.#racingCarInfo;
  }
}

export default RacingCar;
