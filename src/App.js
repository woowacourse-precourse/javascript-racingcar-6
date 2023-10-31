import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class App {
  async play() {
    try {
      const names = await this.getInput('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      const validNames = this.validateName(names);
      const cars = validNames.map((name) => new Car(name));

      const timesInput = await this.getInput('시도할 횟수는 몇 회인가요?\n');
      const times = this.validateNumber(timesInput);

      this.playGame(cars, times);
      this.displayWinner(cars);
    } catch (error) {
      throw error;
    }
  }

  async getInput(promptMsg) {
    return await MissionUtils.Console.readLineAsync(promptMsg);
  }

  playGame(cars, times) {
    MissionUtils.Console.print("\n실행결과");

    while (times > 0) {
      this.moveCars(cars);
      this.printCarsPosition(cars);
      MissionUtils.Console.print("");

      times -= 1;
    }
  }

  moveCars(cars) {
    for (const car of cars) {
      const value = MissionUtils.Random.pickNumberInRange(0, 9);

      car.move(value);
    }
  }

  printCarsPosition(cars) {
    for (const car of cars) {
      MissionUtils.Console.print(car.printPosition());
    }
  }

  displayWinner(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.getPosition().length));

    const winners = cars
      .filter((car) => car.getPosition().length === maxPosition)
      .map((car) => car.getName())
      .join(", ");

    MissionUtils.Console.print(`최종 우승자 : ${winners}`);
  }

  validateName(names) {
    const parsedNames = names.split(',');

    for (const name of parsedNames) {
      if (name.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
      }
    }

    return parsedNames;
  }

  validateNumber(times) {
    if (!/^\d+$/.test(times)) {
      throw new Error('[ERROR] 잘못된 값을 입력하였습니다.');
    }
    
    return parseInt(times, 10);
  }
}

export default App;
