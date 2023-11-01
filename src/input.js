import { Console } from '@woowacourse/mission-utils';

const blankRex = /(\s*)/g;

export class Input {
  async carNames() {
    const inputCarNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n '
    );

    const carNames = inputCarNames.replace(blankRex, '').split(',');

    carNames.forEach((carName) => {
      this.#isValidCarName(carName);
    });

    return carNames;
  }

  async gameCount() {
    const inputGameCount = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );
    const NumberGameCount = Number(inputGameCount);
    this.#isValidGameCount(NumberGameCount);

    return NumberGameCount;
  }

  #isValidGameCount(gameCount) {
    // 숫자 체크
    if (isNaN(gameCount)) throw new Error('[ERROR] 숫자가 아닙니다.');

    // 실수 체크
    if (!Number.isInteger(gameCount))
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');

    // 0이상 체크
    if (gameCount <= 0) throw new Error('[ERROR] 0이상 입력해야 합니다.');
  }

  #isValidCarName(carName) {
    // 빈 값 체크
    if (!carName) {
      throw new Error('[ERROR] 값이 입력되지 않았습니다.');
    }
    // 5자리 이하 체크
    if (carName.length > 5)
      throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
  }
}
