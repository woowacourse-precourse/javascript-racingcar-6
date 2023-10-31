import { Console } from '@woowacourse/mission-utils';
import Message from '../constant/Message.js';
import Validation from '../utils/Validation.js';

export default class InputView {
  /**
   * 자동차 이름 목록을 입력 받고 값이 유효한지 검증 후
   * ','를 기준으로 변환된 배열을 반환합니다.
   * @returns {Promise<string[]>} [자동차 이름 목록]
   */
  static async getCarNameList() {
    const carNames = await Console.readLineAsync(Message.RACE_START);
    const carNameList = carNames.split(',');
    Validation.carNameInput(carNameList);

    return carNameList;
  }

  /**
   * 시도할 횟수를 입력 받고 값이 유효한지 검증 후 숫자로 변환된 입력 값을 반환합니다.
   * @returns {Promise<number>} [시도할 횟수]
   */
  static async getTryCount() {
    const tryCount = await Console.readLineAsync(Message.TRY);
    const tryCountNumber = Number(tryCount);
    Validation.tryCountInput(tryCountNumber);

    return tryCountNumber;
  }
}
