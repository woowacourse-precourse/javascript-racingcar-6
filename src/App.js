import { Random, Console } from "@woowacourse/mission-utils";
class App {
  async play() {
    Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    this.carNames = this.getCarNamesInput();
  }

  async getCarNamesInput() {
    const carNames = await Console.readLineAsync("");
    const splitCarNames = carNames.split(",");
    const carNamesRemoveWhitespace = splitCarNames.map((name) => name.trim());
    return carNamesRemoveWhitespace;
  }
}

export default App;
