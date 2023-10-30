import { Console } from "@woowacourse/mission-utils";

class App {
  #carNameList;
  #tryCount;

  async play() {
    await this.receiveCarNameInput();
    await this.receiveTryCountInput();
  }

  async receiveCarNameInput() {
    this.#carNameList = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
  }

  async receiveTryCountInput() {
    this.#tryCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
  }

  accumulateDistanceEachCar() {}

  printDistanceResult() {}

  calculateDistance() {}

  printWinnerResult() {}

  validateUserInput() {}
}

export default App;
