import { Console } from '@woowacourse/mission-utils';
import MESSAGES from './constants/messages.js';
import NUMBERS from './constants/numbers.js';
import { isCarListValid, isRacingAttemptsValid } from './utils/validator.js';

import startRacing from './functions/startRacing.js';

class App {
  constructor() {
    this.carList = [];
    this.attemptTimes = 0;
    this.winner = [];
    this.racingCars = {};
  }

  async play() {
    const answer = await Console.readLineAsync(MESSAGES.ENTER_CAR_NAME);
    this.carList = answer.split(',');

    if (
      isCarListValid(
        this.carList,
        NUMBERS.MAX_CARLIST_LENGTH,
        NUMBERS.MIN_CARLIST_LENGTH,
        NUMBERS.MAX_CAR_NAME_LENGTH,
      )
    ) {
      const attemptTimes = await Console.readLineAsync(
        MESSAGES.ENTER_NUMBER_TO_ATTEMPT,
      );
      this.attemptTimes = attemptTimes;
      if (isRacingAttemptsValid(this.attemptTimes)) {
        return startRacing(this.attemptTimes, this.carList);
      }
      throw new Error(MESSAGES.NOT_VALID_NUMBER);
    }
    throw new Error(MESSAGES.NOT_VALID_CARS_NAME);
  }
}

export default App;
