import { Console } from '@woowacourse/mission-utils';

class Input {
  async carName() {
    const name = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    return name;
  }

  async attemptsCount () {
    const count = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return count;
  }
}

export default Input;