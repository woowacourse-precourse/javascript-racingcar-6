import { Random } from '@woowacourse/mission-utils';
import {
  SYMBOLS, SETTING_NUMBERS
} from '../constants/constants.js';

/**
 * 새로운 자동차를 만든다.
 * 
 * @class
 * @constructor
 * @param {string} name
 * @param {string} movingDistance
 */
export default class RacingCar {
  constructor(name) {
    this.name = name;
    this.movingDistance = '';
  }

  tryRacing() {
    const randomNumber = Random.pickNumberInRange(
      SETTING_NUMBERS.minRandomNum,
      SETTING_NUMBERS.maxRandomNum
    );

    if (randomNumber >= SETTING_NUMBERS.moveThreshold) {
      this.movingDistance += SYMBOLS.movingDistanceSymbol;
    }
  }

  getTotalMileage() {
    return this.movingDistance.length;
  }
}

// const newCar = new RacingCar("hello");
// console.log(newCar.name);
// newCar.tryRacing();
// newCar.tryRacing();
// newCar.tryRacing();
// newCar.tryRacing();
// console.log(newCar.movingDistance);
// console.log(newCar.getTotalMileage());
