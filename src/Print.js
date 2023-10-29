import { Console } from '@woowacourse/mission-utils';
import { TEXT } from './constants/constants';

class Print {
  static async getCarsName() {
    const participateCars = await Console.readLineAsync(TEXT.INITIAL);

    return participateCars;
  }
}

export default Print;
