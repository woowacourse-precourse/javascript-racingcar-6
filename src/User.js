import ValidationError from './error/ValidationError.js';
import utils from './utils/utils.js';
import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, ERROR } from './constants/message.js';
import { RACE } from './constants/constants.js';

class User {
  async getRacingCarList() {
    const racingCarList = await Console.readLineAsync(
      MESSAGE.racingCar + RACE.newLineMark,
    );
    const isCarListValidate = utils.isCarListSeparate(racingCarList);
    if (!isCarListValidate) {
      throw new ValidationError(ERROR.carListValidate);
    }
    return racingCarList.split(RACE.separateMark);
  }

  async getRaceNumber() {
    const raceNumber = await Console.readLineAsync(
      MESSAGE.raceNumber + RACE.newLineMark,
    );
    const isValid = utils.isNumberExcludeZero(Number(raceNumber));
    if (!isValid) {
      throw new ValidationError(ERROR.raceNumberValidate);
    }
    return raceNumber;
  }
}

export default User;
