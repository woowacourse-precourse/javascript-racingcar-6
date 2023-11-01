import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.car = [];
    this.data = [];
    this.winner = [];
    this.attepmt = 0;
  }

  getData() {
    return this.data;
  }

  getCar() {
    return this.car;
  }

  getAttempt() {
    return this.attepmt;
  }

  getWinner() {
    return this.winner;
  }

  setCar(car) {
    this.car = car;
  }

  setAttempt(attempt) {
    this.attepmt = Number(attempt);
  }

  setData(length) {
    this.data = new Array(length).fill("");
  }

  async initialize() {
    let car_input = (
      await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      )
    ).split(",");

    this.setCar(car_input);

    let attempt_input = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    this.setAttempt(attempt_input);
    this.setData(this.car.length);
  }

  async play() {
    await this.initialize();
  }
}

export default App;
