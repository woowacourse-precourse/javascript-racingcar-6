import { MissionUtils } from "@woowacourse/mission-utils";

const { Random, Console } = MissionUtils;

export const ERROR_MESSAGE = {
  LENGTH: "[ERROR] 이름은 5자 이하만 가능합니다.",
  NUMBER: "[ERROR] 숫자를 잘못 입력했습니다.",
  EMPTY: "[ERROR] 입력이 비어있습니다.",
};

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    if (Random.pickNumberInRange(0, 9) >= 4) this.position++;
  }

  toString() {
    return `${this.name} : ${"-".repeat(this.position)}`;
  }
}

class App {
  constructor() {
    this.cars = [];
    this.chances = 0;
  }

  async play() {
    await this.getCars();
    await this.getChances();
    this.startRace();
    this.getResult();
  }

  async getCars() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const input = await Console.readLineAsync();

    if (!input || input.trim() === "") throw new Error(ERROR_MESSAGE.EMPTY);

    const carNames = input.split(",").map((name) => name.trim());
    if (carNames.some((name) => name.length > 5))
      throw new Error(ERROR_MESSAGE.LENGTH);

    this.cars = input.split(",").map((name) => new Car(name));
  }

  async getChances() {
    Console.print("시도할 횟수는 몇 회인가요?");
    const input = await Console.readLineAsync();

    if (!input || isNaN(input)) throw new Error(ERROR_MESSAGE.NUMBER);
    this.chances = parseInt(input);
  }

  startRace() {
    for (let chance = 0; chance < this.chances; chance++) {
      this.cars.forEach((car) => car.move());
    }
  }

  getResult() {
    this.cars.forEach((car) => Console.print(car.toString()));
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    const winners = this.cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);

    if (winners.length === 1) Console.print(`최종 우승자: ${winners[0]}`);
    else Console.print(`최종 우승자: ${winners.join(", ")}`);
  }
}

export default App;
