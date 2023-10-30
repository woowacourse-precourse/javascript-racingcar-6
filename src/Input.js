import { Console } from '@woowacourse/mission-utils';
import ERROR from './constants/Error.js';

const Input = {
  async getCarNames() {
    const names = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    if (!names) {
      throw new Error(ERROR.carName);
    }

    return names;
  },

  async getRepeatTimes() {
    const times = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    const pattern = /^[1-9]d*$/;
    if (!pattern.test(times)) {
      throw new Error(ERROR.attemptNum);
    }
    return times;
  },

};

export default Input;
