import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    this.printGameStart();
    const carNameList = await this.inputCarNames();
    const gameCount = await this.askGameCount();
  }

  printGameStart() {
    Console.print(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
  }

  async inputCarNames() {
    const carNames = await Console.readLineAsync('');
    const carNameList = carNames.split(',');
    const trimmedCarNames = carNameList.map((carName) => carName.trim());

    if (!this.isValidCarNamesInput(trimmedCarNames)) {
      throw new Error('[ERROR] 잘못된 입력값입니다.');
    }

    return trimmedCarNames;
  }

  async askGameCount() {
    const gameCount = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요? \n'
    );
    return gameCount;
  }

  isValidCarNamesInput(carNameList) {
    if (carNameList.length === 1) return false;

    for (let carName of carNameList) {
      if (carName.length === 0 || carName.length > 5) return false;
    }

    return true;
  }
}

export default App;
