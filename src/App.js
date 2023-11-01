import { Console } from "@woowacourse/mission-utils";
import { makeRandomNumber } from "./utils/func.js";

class App {
  #carDistanceTable;
  #tryCount;

  initializeDistance(carNameList) {
    this.#carDistanceTable = carNameList.reduce((acc, cur) => {
      acc[cur] = 0;
      return acc;
    }, {});
  }

  async play() {
    await this.receiveCarNameInput();
    await this.receiveTryCountInput();

    for (let i = 0; i < this.#tryCount; i++) {
      this.accumulateDistanceEachCar();
      this.printDistanceResult();
    }

    const winners = this.chooseWinner();
    this.printWinnerResult(winners);
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

    this.initializeDistance(carNameList);
  }

  async receiveTryCountInput() {
    const tryCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");

    if (this.validateTryCountInput(tryCount)) {
      throw new Error(
        "[ERROR] 입력값이 유효하지 않습니다. 프로그램을 종료합니다."
      );
    }

    this.#tryCount = parseInt(tryCount);
  }

  validateTryCountInput(tryCount) {
    return isNaN(parseInt(tryCount));
  }

  accumulateDistanceEachCar() {
    for (let i = 0; i < Object.entries(this.#carDistanceTable).length; i++) {
      const randomNumber = makeRandomNumber();
      const key = Object.keys(this.#carDistanceTable)[i];

      if (randomNumber < 4) continue;

      this.#carDistanceTable[key] = this.#carDistanceTable[key] + 1;
    }
  }

  printDistanceResult() {
    for (let i = 0; i < Object.entries(this.#carDistanceTable).length; i++) {
      const key = Object.keys(this.#carDistanceTable)[i];
      Console.print(`${key} : ${"-".repeat(this.#carDistanceTable[key])}`);
    }

    Console.print("\n");
  }

  chooseWinner() {
    if (Object.keys(this.#carDistanceTable).length === 0) {
      return [];
    }

    const values = Object.values(this.#carDistanceTable);
    const maxValue = Math.max(...values);
    const keysWithMaxValue = Object.keys(this.#carDistanceTable).filter(
      (key) => this.#carDistanceTable[key] === maxValue
    );

    return keysWithMaxValue;
  }

  printWinnerResult(winners) {
    const finalWinner = winners.join(", ");
    Console.print(`최종 우승자 : ${finalWinner}`);
  }
}

export default App;
