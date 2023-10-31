import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, ERROR } from './constants/message.js';
import { RACE } from './constants/constants.js';
import ValidationError from './error/ValidationError.js';
import utils from './utils/utils.js';

class User {
  async getRacingCarList() {
    const racingCarList = await Console.readLineAsync(`${MESSAGE.racingCar}\n`);
    const isCarListValidate = utils.isCarListSeparate(racingCarList);
    if (!isCarListValidate) {
      throw new ValidationError(ERROR.carListValidate);
    }
    return racingCarList.split(RACE.separateMark);
  }

  async getRaceNumber() {
    const raceNumber = await Console.readLineAsync(`${MESSAGE.raceNumber}\n`);
    const isValid = utils.isNumberExcludeZero(Number(raceNumber));
    if (!isValid) {
      throw new ValidationError(ERROR.raceNumberValidate);
    }
    return raceNumber;
  }
}

export default User;
