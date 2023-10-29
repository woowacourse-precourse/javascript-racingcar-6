import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    this.printGameStart();
    const carNameList = await this.inputCarNames();
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

    return trimmedCarNames;
  }
}

export default App;
