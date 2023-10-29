import { Random, Console } from "@woowacourse/mission-utils";

class App {
  inputData = "";
  inputArray = [];

  async start() {
    return Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
  }

  splitCarName() {
    this.inputArray = this.inputData.split(",");
  }

  async play() {
    this.inputData = await this.start();

    this.splitCarName();
  }
}

export default App;
