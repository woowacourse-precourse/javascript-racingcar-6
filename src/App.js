import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.carNameList = [];
    this.dashSymbol = [];
    this.randomNumArr = [];
    this.ERROR_MESSAGE = [
      "[ERROR] 자동차 이름은 5자 이하로 입력해주세요.",
      "[ERROR] 숫자가 잘못된 형식입니다.",
    ];
  }

  async play() {
    this.gamePlay();

    this.carNameList = await this.inputCarName();

    if (!this.isValidCarNames()) {
      throw new Error("[ERROR] 자동차 이름을 5자 이하로 입력해주세요");
    }

    this.carNameList.forEach(() => {
      this.dashSymbol.push("");
    });

    Console.print("시도할 횟수는 몇 회인가요?");
    this.attemptCount = await this.inputAttemptCount();
    this.validateAttemptCount(this.attemptCount);

    Console.print("");
    Console.print("실행 결과");
    Console.print("");

    let currentCount = 1;
    while (true) {
      this.randomNumArr = this.createRandomNumberArr(this.carNameList.length);

      this.updateCarPosition();
      this.displayCarPosition();
      Console.print("");

      if (currentCount === this.attemptCount) {
        const topPerformingCarNames = this.getLeadingCarNames();
        this.getFinalWinner(topPerformingCarNames);
        break;
      }
      currentCount++;
    }
  }

  gamePlay() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
  }

  async inputCarName() {
    const carNames = await Console.readLineAsync("");

    return carNames.split(",");
  }

  isValidCarNames() {
    let isValid = true;

    this.carNameList.forEach((name) => {
      if (name.length > 5 || name.trim().length === 0) {
        isValid = false;
      }
    });

    return isValid;
  }

  async inputAttemptCount() {
    const countValue = await Console.readLineAsync("");
    return parseInt(countValue);
  }

  validateAttemptCount(count) {
    if (isNaN(count) || count === 0) {
      throw new Error(this.ERROR_MESSAGE[1]);
    }
  }

  createRandomNumberArr(len) {
    return Array.from({ length: len }).map(() =>
      Random.pickNumberInRange(0, 9)
    );
  }

  updateCarPosition() {
    this.carNameList.forEach((_, index) => {
      const dashes = "-".repeat(this.randomNumArr[index] >= 4 ? 1 : 0);
      this.dashSymbol[index] += dashes;
    });
  }

  displayCarPosition() {
    this.carNameList.forEach((value, index) => {
      Console.print(`${value} : ${this.dashSymbol[index]}`);
    });
  }

  getLeadingCarNames() {
    let topPerformingCarNames = [this.carNameList[0]];
    let topPerformingCarValue = this.dashSymbol[0].length;
    for (let i = 1; i < this.carNameList.length; i++) {
      if (this.dashSymbol[i].length > topPerformingCarValue) {
        topPerformingCarNames = [this.carNameList[i]];
        topPerformingCarValue = this.dashSymbol[i].length;
      } else if (this.dashSymbol[i].length === topPerformingCarValue) {
        topPerformingCarNames.push(this.carNameList[i]);
      }
    }
    return topPerformingCarNames;
  }

  getFinalWinner(topPerformingCarNames) {
    const winners = topPerformingCarNames.join(", ");
    Console.print(`최종 우승자 : ${winners}`);
  }
}

export default App;
