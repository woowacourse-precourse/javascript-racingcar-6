import { Console, Random } from "@woowacourse/mission-utils";
class App {
  constructor() {
    // const gameResult = {};
  }
  async play() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNameList = await this.inputCarName();
    splitCarNames(carNameList);
  }
  async inputCarName() {
    const carNames = await Console.readLineAsync("");
    return carNames;
  }
}

export default App;
