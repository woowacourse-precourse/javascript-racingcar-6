import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    const cars = await this.returnCarNames();
    const tryCount = await this.getTryCount();
    Console.print(cars, tryCount);
  }

  async returnCarNames() {
    const carNames = await Console.readLineAsync('자동차 이름을 입력하세요. (이름은 쉼표(,)로 구분)\n');

    return this.validName(carNames);
  }

  async getTryCount() {
    const tryCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return this.isInvalidCount(tryCount);
  }

  isInvalidCount(tryCount) {
    if (Number.isNaN(tryCount) || tryCount < 1) {
      throw new Error('[ERROR] 시도 횟수는 0 이상의 숫자여야 합니다.');
    }
    return tryCount;
  }

  validName(carNames) {
    const names = carNames.split(',').map((name) => name.trim());
    this.isWrongName(names);
    this.isDuplicateName(names);

    return names;
  }

  isWrongName(names) {
    if (names.some((name) => !(name.length > 0 && name.length <= 5))) {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }
  }

  isDuplicateName(names) {
    if (new Set(names).size !== names.length) {
      throw new Error('[ERROR] 중복된 이름입니다.');
    }
  }
}

export default App;
