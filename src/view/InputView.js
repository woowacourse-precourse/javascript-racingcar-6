import { Console } from '@woowacourse/mission-utils';
import RandomGenerator from '../controller/RandomGenerator.js';
import throwError from '../common/middleware/errorHandler.js';
import isValidInputCarName from '../common/middleware/carNameValidator.js';
import isValidInputTryNumber from '../common/middleware/tryNumberValidator.js';
import { LOG_MESSAGE, ERROR_MESSAGE } from '../common/utils/constants/message.js';

class InputView {
  constructor() {
    this.randomNumber = new RandomGenerator();
  }

  async startGame() {
    await this.getUserInputCarName();
    await this.getUserInputTryNumber();
  }

  // 비동기로 자동차 이름 입력 유도하는 함수 호출
  async getUserInputCarName() {
    const input = await Console.readLineAsync(LOG_MESSAGE.INPUT_CAR_NAME); 
    // TODO
    // isValidInputCarName인 utils 막바로 호출하지 말고, 얘를 InputController에 넣어서 
    // InputController.isValidInputCarName()를 호출
    // controller에서도 constants에 있는 숫자를 파라미터로 넣어서 호출
    if (!isValidInputCarName(input)) {
      throwError(ERROR_MESSAGE.INCORRECT_CAR_NAME);
    }
  }

  // 비동기로 시도 횟수 입력 유도하는 함수 호출
  async getUserInputTryNumber() {
    // TODO: 이것도 마찬가지
    const input = await Console.readLineAsync(LOG_MESSAGE.INPUT_TRY_NUMBER);
    // 시도 횟수 유효성 검사 합격
    if (!isValidInputTryNumber(input)) {
      throwError(ERROR_MESSAGE.INCORRECT_TRY_NUMBER);
    }
  }
}

export default InputView;
