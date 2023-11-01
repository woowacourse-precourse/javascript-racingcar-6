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
  async play() {
    await this.getCarNames();
}

export default App;
