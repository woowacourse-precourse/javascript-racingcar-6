import { Console } from '@woowacourse/mission-utils';
import { GetTryNumberConstant } from './Constant.js';

class GetTryNumber {
  #tryNumber;

  async getTryNumber() {
    Console.print(GetTryNumberConstant.GET_TRY_NUMBER_MESSAGE);
    const tryNumber = await Console.readLineAsync('');

    this.#tryNumber = parseInt(tryNumber);
    if (this.#tryNumber) {
      return this.#tryNumber;
    } else {
      throw new Error(GetTryNumberConstant.IS_NUMBER);
    }
  }
}

export default GetTryNumber;
