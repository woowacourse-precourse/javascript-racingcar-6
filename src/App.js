import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class App {
  async play() {
    try {
      const names = await this.getCarNames();
      const cars = names.split(",").map((name) => {
        return new Car(name);
      });
      const times = await this.getPlayTimes();
      this.printPlayTimes(cars, times);
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  async getCarNames() {
    try {
      const names = MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      return names;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  async getPlayTimes() {
    try {
      const times =
        MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      return times;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  printPlayTimes(cars, times) {
    MissionUtils.Console.print("\n실행결과");
    while(times > 0) {
      for(const car of cars) {
        car.move();
      }

      for(const car of cars) {
        car.getPosition();
      }
      MissionUtils.Console.print("\n");
      times -= 1;
    }
  }
}

export default App;
