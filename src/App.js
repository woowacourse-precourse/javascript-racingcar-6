import { Console, Random } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.name = [];
    this.count = [];
    this.randomNum = [];
    this.gameResult = {};
  }
  async play() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNameList = await this.inputCarName();
    this.name = convertStrToArr(carNameList);
    console.log(this.name);
    Console.print("시도할 횟수는 몇 회인가요?");
    const attemptCount = await this.inputAttemptCount();
    this.isValidAttemptCount(attemptCount);
    Console.print("");
    Console.print("실행 결과");
    this.createRandomNumber();

    console.log(this.randomNum);
  }

  async inputCarName() {
    const carNames = await Console.readLineAsync("");
    return carNames;
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
    for (let i = 0; i < this.name.length; i++) {
      const randomNum = Random.pickNumberInRange(0, 9);
      this.randomNum.push(randomNum);
    }
    return this.randomNum;
  }
}
const convertStrToArr = (nameList) => {
  const splitName = nameList.split(",");
  return splitName;
};

export default App;
