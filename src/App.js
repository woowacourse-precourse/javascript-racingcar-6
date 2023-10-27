import { Console, Random } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.carNameArr = [];
    this.dashSymbol = [];
    this.randomNumArr = [];
    this.carPosition = {};
    this.attemptCount = 0;
    this.dash = "-";
  }
  async play() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNameList = await this.inputCarName();
    this.carNameArr = convertStrToArr(carNameList);
    this.isValidCarNames(this.carNameArr);
    Console.print("시도할 횟수는 몇 회인가요?");
    this.attemptCount = await this.inputAttemptCount();
    this.isValidAttemptCount(this.attemptCount);
    Console.print("");
    Console.print("실행 결과");
    this.gameResult();
  }

  async inputCarName() {
    const carNames = await Console.readLineAsync("");
    return carNames;
  }
  isValidCarNames() {
    for (let i = 0; i < this.carNameArr.length; i++) {
      if (this.carNameArr[i].length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하로 입력해주세요.");
      }
    }
  }
  async inputAttemptCount() {
    const countValue = await Console.readLineAsync("");
    return countValue;
  }
  isValidAttemptCount(count) {
    if (isNaN(count)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  createRandomNumber() {
    this.randomNumArr = [];
    for (let i = 0; i < this.carNameArr.length; i++) {
      const randomNum = Random.pickNumberInRange(0, 9);
      this.randomNumArr.push(randomNum);
    }
    console.log(this.randomNumArr);
  }
  updateCarPosition() {
    for (let i = 0; i < this.carNameArr.length; i++) {
      if (!this.dashSymbol[i]) {
        this.dashSymbol[i] = "";
      }
      const dashes = "-".repeat(this.randomNumArr[i] >= 4 ? 1 : 0);
      this.dashSymbol[i] += dashes;
    }
  }
  gameResult() {
    for (let i = 0; i < this.attemptCount; i++) {
      Console.print("");
      this.createRandomNumber();
      this.updateCarPosition();

      for (let j = 0; j < this.carNameArr.length; j++) {
        Console.print(`${this.carNameArr[j]} : ${this.dashSymbol[j]}`);
      }
    }
  }
}

const convertStrToArr = (nameList) => {
  const splitName = nameList.split(",");
  return splitName;
};

export default App;
