import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    this.askCarNames();
    const racingCarList = await this.inputCarNames();

    this.askGameCount();
    const gameCount = await this.inputGameCount();
  }

  askCarNames() {
    Console.print(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
  }

  async inputCarNames() {
    const carNames = await Console.readLineAsync('');
    const carNameList = carNames.split(',').map((carName) => carName.trim());

    if (!this.isValidCarNamesInput(carNameList)) {
      throw new Error('[ERROR] 잘못된 입력값입니다.');
    }

    const racingCarList = new Map();
    carNameList.forEach((racingCar) => {
      racingCarList.set(racingCar, '');
    });

    return racingCarList;
  }

  askGameCount() {
    Console.print('시도할 횟수는 몇 회인가요?');
  }

  async inputGameCount() {
    const gameCount = await Console.readLineAsync('');
    const trimmedGameCount = gameCount.trim();

    if (!this.isValidGameCountInput(trimmedGameCount)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    return parseInt(trimmedGameCount);
  }

  isValidCarNamesInput(carNameList) {
    if (carNameList.length === 1) return false;

    for (let carName of carNameList) {
      if (carName.length === 0 || carName.length > 5) return false;
    }

    return true;
  }

  isValidGameCountInput(gameCount) {
    if (isNaN(gameCount) || gameCount <= 0) return false;

    return true;
  }
}

export default App;
