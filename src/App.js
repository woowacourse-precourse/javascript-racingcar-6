import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";

const { Console } = MissionUtils;

class App {
  constructor() {
    this.cars = [];
  }

  async play() {
    try {
      const carNames = (
        await Console.readLineAsync("경주할 자동차 이름을 입력하세요.")
      ).split(",");
      carNames.forEach((name) => this.cars.push(new Car(name)));
      const rounds = Number(
        await Console.readLineAsync("시도할 횟수는 몇 회인가요?")
      );
      for (let i = 0; i < rounds; i++) {
        this.cars.forEach((car) => car.move());
        this.printStatus();
      }
      this.printWinner();
    } catch (error) {
      console.error(error.message);
    }
  }

  printStatus() {
    this.cars.forEach((car) => {
      Console.print(car.getName() + " : " + "-".repeat(car.getDistance()));
    });
    Console.print("");
  }

  printWinner() {
    const maxDistance = Math.max(...this.cars.map((car) => car.getDistance()));
    const winners = this.cars
      .filter((car) => car.getDistance() === maxDistance)
      .map((car) => car.getName());
    Console.print("최종 우승자 : " + winners.join(", "));
  }
}

export default App;
