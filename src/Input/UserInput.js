import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE, SYMBOL } from '../Constants/Constants.js';
import ValidateAttempt from '../Validator/ValidateAttempt.js';
import ValidateCarName from '../Validator/ValidateCarName.js';

class UserInput {
  constructor() {
    this.validateCarName = new ValidateCarName();
    this.validateAttempt = new ValidateAttempt();
  }

  /**
   * getCarName(): 경주에 참가할 자동차 이름을 입력받는 메소드
   * 자동차들 이름이 저장되어 있는 배열 반환
   */
  getCarName = async () => {
    const input = await Console.readLineAsync(INPUT_MESSAGE.carNames);

    const carNames = input.split(SYMBOL.comma).map((carName) => carName.trim());
    this.validateCarName.isValidCarNames(carNames);

    return carNames;
  };

  /**
   * getAttempts(): 시도 횟수를 입력받는 메소드
   * 입력받은 시도 횟수를 반환
   */
  getAttempts = async () => {
    const attempt = await Console.readLineAsync(INPUT_MESSAGE.attempt);
    this.validateAttempt.isValidAttempt(attempt);

    return attempt;
  };
}

export default UserInput;
