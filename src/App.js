import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.car = [];
    this.data = [];
    this.winner = [];
    this.attepmt = 0;
  }

  static carInputValidator(input) {
    if (input.filter((car) => car.length <= 5).length < input.length)
      throw Error("[ERROR] 자동차 이름은 5자 이하여야합니다.");
  }

  static attemptInputValidator(input) {
    if (Number.isNaN(Number(input)))
      throw Error("[ERROR] 숫자 형식이 아닙니다.");
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

  setWinner() {
    const MAX = Math.max(...this.data.map((data) => data.length));

    for (let i = 0; i < this.car.length; i += 1) {
      if (this.data[i].length === MAX) this.winner.push(this.car[i]);
    }
  }

  async initialize() {
    const carInput = (
      await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
      )
    ).split(",");
    App.carInputValidator(carInput);

    this.setCar(carInput);

    const attemptInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n",
    );

    App.attemptInputValidator(attemptInput);

    this.setAttempt(attemptInput);
    this.setData(this.car.length);
  }

  goOrStop() {
    for (let i = 0; i < this.car.length; i += 1) {
      const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);
      if (RANDOM_NUMBER >= 4) this.data[i] += "-";
    }
  }

  print() {
    for (let i = 0; i < this.car.length; i += 1) {
      Console.print(`${this.car[i]} : ${this.data[i]}`);
    }
    Console.print("");
  }

  async play() {
    await this.initialize();
    Console.print("실행 결과");
    for (let i = 0; i < this.attepmt; i += 1) {
      this.goOrStop();
      this.print();
    }

    this.setWinner();
    Console.print(`최종우승자 : ${this.getWinner()}`);
  }
}

export default App;
