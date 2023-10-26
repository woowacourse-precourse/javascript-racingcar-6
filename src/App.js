import { Console, Random } from "@woowacourse/mission-utils";
class App {
  constructor() {
    // const gameResult = {};
  }
  async play() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNameList = await this.inputCarName();
    convertStrToArr(carNameList);
    Console.print("시도할 횟수는 몇 회인가요?");
    const attemptCount = await this.inputAttemptCount();
    Console.print("");
    Console.print("실행 결과");
  }
  async inputCarName() {
    const carNames = await Console.readLineAsync("");
    return carNames;
  }
  async inputAttemptCount() {
    const countValue = await Console.readLineAsync("");
    return countValue;
  }
}
const convertStrToArr = (nameList) => {
  const splitName = nameList.split(",");
  return splitName;
};

export default App;
