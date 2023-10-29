import { Console } from "@woowacourse/mission-utils";
import Car from "./Car";

class App {
  async getCarInput() {
    const carName = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분"
    );

    return cars.split(",");
  }

  async getRaceCount() {
    const race = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");

    return race;
  }

  async startRace(carName, raceCount) {
    const cars = carName.map((name) => new Car(name));

    for (let i = 0; i < raceCount; i++) {
      cars.forEach((car) => car.move());
      this.printMoveResult(cars);
    }

    return cars;
  }

  printMoveResult(cars) {
    cars.forEach((car) => {
      const moveCount = "-".repeat(car.move);
      Console.print(`${car.name} : ${moveCount}`);
    });
  }

  async play() {
    const carName = await this.getCarInput();

    if (carName.every((car) => car.length <= 5)) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }

    const raceCount = await this.getRaceCount();

    if (isNaN(raceCount)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    await this.startRace(carName, raceCount);
  }
}

export default App;
