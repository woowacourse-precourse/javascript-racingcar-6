import { Console } from '@woowacourse/mission-utils';

class Inputs {
  async returnCarNames() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    return carNames;
  }

  async getTryCount() {
    const tryCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    return tryCount;
  }
}

export default Inputs;
