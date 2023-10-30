import { Console, Random } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.carNameList = [];
    this.dashSymbol = [];
    this.randomNumArr = [];
    this.dash = "-";
    this.errorMessage = [
      "[ERROR] 자동차 이름은 5자 이하로 입력해주세요.",
      "[ERROR] 숫자가 잘못된 형식입니다.",
    ];
  }
  async play() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    this.carNameList = await this.inputCarName();
    console.log(this.carNameList);
    this.isValidCarNames(this.carNameList);
    Console.print("시도할 횟수는 몇 회인가요?");
    this.attemptCount = await this.inputAttemptCount();
    this.isValidAttemptCount(this.attemptCount);
    Console.print("");
    Console.print("실행 결과");
    this.displayCarPosition();
    Console.print("");
    const maxValue = this.getMaxValue();
    this.getFinalWinner(maxValue);
  }

  async inputCarName() {
    const carNames = await Console.readLineAsync("");

    return carNames.split(",");
  }
  isValidCarNames() {
    for (let i = 0; i < this.carNameList.length; i++) {
      if (this.carNameList[i].length > 5 || this.carNameList[i].length === 0) {
        throw new Error(this.errorMessage[0]);
      }
    }
  }
  async inputAttemptCount() {
    const countValue = await Console.readLineAsync("");
    return countValue;
  }
  isValidAttemptCount(count) {
    if (isNaN(count)) {
      throw new Error(this.errorMessage[1]);
    }
  }

  createRandomNumber() {
    this.randomNumArr = [];
    for (let i = 0; i < this.carNameList.length; i++) {
      const randomNum = Random.pickNumberInRange(0, 9);
      this.randomNumArr.push(randomNum);
    }
  }

  updateCarPosition() {
    for (let i = 0; i < this.carNameList.length; i++) {
      if (!this.dashSymbol[i]) {
        this.dashSymbol[i] = "";
      }
      const dashes = "-".repeat(this.randomNumArr[i] >= 4 ? 1 : 0);
      this.dashSymbol[i] += dashes;
    }
  }

  displayCarPosition() {
    for (let i = 0; i < this.attemptCount; i++) {
      Console.print("");
      this.createRandomNumber();
      this.updateCarPosition();

      for (let j = 0; j < this.carNameList.length; j++) {
        Console.print(`${this.carNameList[j]} : ${this.dashSymbol[j]}`);
      }
    }
  }

  getMaxValue() {
    let maxName = [this.carNameList[0]];
    let maxDash = this.dashSymbol[0].length;
    for (let i = 1; i < this.carNameList.length; i++) {
      if (this.dashSymbol[i].length > maxDash) {
        maxName = [this.carNameList[i]];
        maxDash = this.dashSymbol[i].length;
      } else if (this.dashSymbol[i].length === maxDash) {
        maxName.push(this.carNameList[i]);
      }
    }
    return maxName;
  }

  getFinalWinner(maxName) {
    const winners = maxName.join(", ");
    Console.print(`최종 우승자 : ${winners}`);
  }
}

export default App;
