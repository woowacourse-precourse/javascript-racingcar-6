import { Console } from '@woowacourse/mission-utils';
import Validator from '../utils/validator/index.js';

const InputView = {
  async readRacingCarNames() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    Validator.checkRacingCarNames(carNames);
    return carNames;
  },

  async readRacingCount() {
    const racingCount = await Console.readLineAsync('시도할 횟누는 몇 회인가요?\n');

    Validator.checkRacingCount(racingCount);
    return racingCount;
  },
};

export default InputView;
