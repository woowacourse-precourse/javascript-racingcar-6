import Message from '../constant/Message.js';

export default class Validation {
  /**
   * 각 자동차 이름의 길이가 5가 넘어가면 에러를 발생시킵니다.
   * @param {string[]} [자동차 이름 목록]
   */
  static carNameInput(carNameList) {
    carNameList.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error(Message.CAR_NAME_INPUT_ERROR);
      }
    });
  }

  /**
   * 입력 받은 시도 횟수가 숫자가 아니라면 에러를 발생시킵니다.
   * @param {number} [시도할 횟수]
   */
  static tryCountInput(tryCountInput) {
    const NUMBER_RANGE_REGEXP = /^\d+$/;
    if (!NUMBER_RANGE_REGEXP.test(tryCountInput)) {
      throw new Error(Message.TRY_COUNT_INPUT_ERROR);
    }
  }
}
