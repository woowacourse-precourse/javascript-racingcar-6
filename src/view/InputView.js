import { Console } from '@woowacourse/mission-utils';
import Validator from '../util/Validator.js';

const InputView = {
  async readCarNames() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n',
    );
    Validator.validateBlank(carNames);
    return carNames;
  },

  async readAttempts() {
    const attempts =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    Validator.validateNumber(attempts);
    return attempts;
  },
};

export default InputView;
