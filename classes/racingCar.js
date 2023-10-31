import {
  MIN_RANDOM_NUMBER,
  MAX_RANDOM_NUMBER,
  MOVE_THRESHOLD,
  MOVING_DISTANCE_SYMBOL,
} from '../constants/constans.js';


/**
 * 새로운 자동차를 만든다.
 * @class
 * @constructor
 * @param {string} name
 * @param {string} movingDistance
 */
export default class racingCar {
  constructor(name) {
    this.name = name;
    this.movingDistance = '';
  }

  tryRacing() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(
      MIN_RANDOM_NUMBER,
      MAX_RANDOM_NUMBER,
    );

    if (randomNumber >= MOVE_THRESHOLD) {
      this.movingDistance += MOVING_DISTANCE_SYMBOL;
    }
  }

  getTotalMileage() {
    return this.movingDistance.length;
  }
}