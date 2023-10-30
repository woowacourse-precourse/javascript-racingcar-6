import { Console } from "@woowacourse/mission-utils";

class App {
  #carDistanceTable;
  #tryCount;

  async play() {
    await this.receiveCarNameInput();
    await this.receiveTryCountInput();
  }

  async receiveCarNameInput() {
    const carNameInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNameList = carNameInput.trim("").split(",");
    const isInvalidCarName = carNameList.some((carName) => carName.length > 5);

    if (isInvalidCarName) {
      throw new Error(
        "[ERROR] 자동차의 이름은 쉼표로 구분된 5자 이하 문자만 가능합니다. 프로그램을 종료합니다."
      );
    }
  }

  initializeDistance() {
    this.#carDistanceTable = carNameList.reduce((acc, cur) => {
      acc[cur] = 0;
      return acc;
    }, {});
  }

  async receiveTryCountInput() {
    this.#tryCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
  }

  validateUserInput() {
    const isInvalidCount = isNaN(parseInt(this.#tryCount));

    if (isInvalidCount) {
      throw new Error(
        "[ERROR] 입력값이 유효하지 않습니다. 프로그램을 종료합니다."
      );
    }
  }

  accumulateDistanceEachCar() {}

  printDistanceResult() {}

  calculateDistance() {}

  printWinnerResult() {}
}

export default App;
