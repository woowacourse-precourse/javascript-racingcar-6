import { Console } from '@woowacourse/mission-utils';
import { TEXT } from './constants/constants';

class Print {
  static async getCarsName() {
    const participateCars = await Console.readLineAsync(TEXT.INITIAL);

    const cars = participateCars.split(COMMAS.SYMBOL);

    if (!Validate.isCarNameLengthValid(cars)) {
      throw new Error(ERROR.CAR_NAME_LENGTH);
    }

    return cars;
  }
}

export default Print;
