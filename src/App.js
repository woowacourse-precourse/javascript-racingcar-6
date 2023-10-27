import { Random, Console } from "@woowacourse/mission-utils";
class App {
  async play() {
    // const number = Random.pickNumberInRange(0, 9);
    const carList = await this.getCarList();
    const tryNumber = await this.getTryNumber();
    console.log(carList, tryNumber);
  }

  async getCarList() {
    Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const carInput = await Console.readLineAsync("");
    const carInputArray = carInput.split(",");
    return carInputArray;
  }

  async getTryNumber() {
    Console.print("시도할 횟수는 몇 회인가요?");
    const tryNumber = await Console.readLineAsync("");
    return tryNumber;
  }
}

export default App;
