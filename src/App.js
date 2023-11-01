import { Console } from "@woowacourse/mission-utils";
import { MESSAGE_TABLE } from "./constants/index.js";
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
    const carNameInput = await Console.readLineAsync(MESSAGE_TABLE.CAR_NAME);
    const carNameList = carNameInput.trim("").split(",");
    const isInvalidCarName = carNameList.some((carName) => carName.length > 5);

    if (isInvalidCarName) {
      throw new Error(MESSAGE_TABLE.ERROR_INVALID_CAR_NAME);
    }

    this.initializeDistance(carNameList);
  }

  async receiveTryCountInput() {
    const tryCount = await Console.readLineAsync(MESSAGE_TABLE.TRY_COUNT);

    if (this.validateTryCountInput(tryCount)) {
      throw new Error(MESSAGE_TABLE.ERROR_INVALID_INPUT);
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

    this.lineBreak();
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

  lineBreak() {
    Console.print("\n");
  }
}

export default App;
