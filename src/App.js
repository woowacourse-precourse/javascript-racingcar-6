import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {}
  constructor() {
    this.cars = {};
    this.tryCount = 0;
  }

  async getCarNames() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    const cars = input.split(",");
    this.isInputVaild(cars);
    this.setCarMove(cars);
  }

  isInputVaild(cars) {
    for (const car of cars) {
      if (car.length > 5)
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      if (this.cars.hasOwnProperty(car))
        throw new Error("[ERROR] 자동차 이름은 중복 불가능합니다.");
    }
  }

  setCarMove(cars) {
    cars.forEach((car) => (this.cars[car] = 0));
  }

  async getTryCount() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    this.isTryCountVaild(input);
    this.setTryCount(input);
  }

  isTryCountVaild(input) {
    if (isNaN(input)) throw new Error("[ERROR] 숫자만 입력 가능합니다.");

    const tryCount = Number(input);
    if (!Number.isInteger(tryCount)) {
      throw new Error("[ERROR] 정수만 입력 가능합니다.");
    }
    if (tryCount < 0) throw new Error("[ERROR] 양수만 입력 가능합니다.");
  }

  setTryCount(input) {
    this.tryCount = Number(input);
  }
  async play() {
    await this.getCarNames();
    await this.getTryCount();
}

export default App;
