import { Console } from '@woowacourse/mission-utils';
import { TEXT } from './constants/constants';
import Validate from './Validate';
import { COMMAS, ERROR } from './constants/constants';

class Print {
  static async getCarsName() {
    const participateCars = await Console.readLineAsync(TEXT.INITIAL);
    const cars = participateCars.split(COMMAS.SYMBOL);

    if (!Validate.isCarNameLengthValid(cars)) {
      throw new Error(ERROR.CAR_NAME_LENGTH);
    }

    if (!Validate.minCarsNumber(cars)) {
      throw new Error(ERROR.CAR_MIN);
    }

    return cars;
  }

  static async getCount() {
    const count = await Console.readLineAsync(TEXT.TRY);
    return count;
  }
}

export default Print;
