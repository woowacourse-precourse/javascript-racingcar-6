import { Console, Random } from '@woowacourse/mission-utils';
class App {
  carList;
  moveCount;

  async play() {
    await this.setCarList();
  }

  async setCarList() {
    const inputResult = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    this.carList = inputResult.split(',');
  }
}

export default App;
