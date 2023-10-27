import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class App {
  constructor() {
    this.cars = [];
    this.rounds = 0;
  }

  async play() {
    try {
      await this.getInputData();
      for (let i = 0; i < this.rounds; i++) {
        this.playRound();
        await this.printCurrentState();
      }
      await this.printWinner();
    } catch (error) {
      if (error.message.startsWith("[ERROR]")) {
        MissionUtils.Console.print(error.message);
        throw error;
      }
      throw error;
    }
  }

  async getInputData() {
    const carNames = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    this.validateCarNames(carNames.split(","));
    this.cars = carNames.split(",").map((name) => new Car(name));

    const rounds = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );
    this.validateRounds(rounds);
    this.rounds = parseInt(rounds);
  }

  validateCarNames(names) {
    if (names.some((name) => name.length > 5 || name.length === 0)) {
      throw new Error("[ERROR] 자동차 이름은 1자 이상, 5자 이하만 가능합니다.");
    }
  }

  validateRounds(rounds) {
    if (isNaN(rounds) || parseInt(rounds) <= 0) {
      throw new Error("[ERROR] 시도할 횟수는 1 이상의 숫자여야 합니다.");
    }
  }

  playRound() {
    this.cars.forEach((car) => car.move());
  }

  async printCurrentState() {
    for (let car of this.cars) {
      await MissionUtils.Console.print(
        `${car.getName()} : ${"-".repeat(car.getPosition())}`
      );
    }
    await MissionUtils.Console.print("\n");
  }

  async printWinner() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    const winners = this.cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());

    await MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

module.exports = App;
