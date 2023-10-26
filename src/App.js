import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class App {
  async play() {
    try {
      const names = await this.getCarNames();
      const pureNames = this.isValidName(names);
      const cars = this.createCars(pureNames);

      const times = await this.getPlayTimes();
      const pureTimes = this.isValidNumber(times);

      this.printPlayTimes(cars, pureTimes);
      this.getWinner(cars);
    } catch (error) {
      throw error;
    }
  }

  async getCarNames() {
    try {
      const names = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      return names;
    } catch (error) {
      throw error;
    }
  }

  async getPlayTimes() {
    try {
      const times = await MissionUtils.Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?\n"
      );
      return times;
    } catch (error) {
      throw error;
    }
  }

  printPlayTimes(cars, times) {
    MissionUtils.Console.print("\n실행결과");
    while (times > 0) {
      for (const car of cars) {
        car.move();
      }

      for (const car of cars) {
        car.getPosition();
      }
      MissionUtils.Console.print("");
      times -= 1;
    }
  }

  getWinner(cars) {
    let playResult = [];

    for (const car of cars) {
      playResult.push(car.position.length);
    }
    let winner = cars
      .filter((car) => {
        if (car.position.length === Math.max(...playResult))
          return car.getName();
      })
      .map((car) => car.name)
      .join(", ");

    MissionUtils.Console.print(`최종 우승자 : ${winner}`);
  }

  createCars(names) {
    const cars = [];
    for (const name of names) {
      cars.push(new Car(name));
    }
    return cars;
  }

  isValidName(names) {
    try {
      const newNames = names.split(",").map((name) => {
        if (name.length > 5) {
          throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
        } else {
          return name;
        }
      });
      return newNames;
    } catch (error) {
      throw error;
    }
  }

  isValidNumber(times) {
    try {
      if (!/^\d+$/.test(times))
        throw new Error("[ERROR] 잘못된 값을 입력하였습니다.");
      return parseInt(times, 10);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
