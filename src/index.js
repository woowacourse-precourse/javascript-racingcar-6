import { Console, MissionUtils } from "@woowacourse/mission-utils";
import App from "./App.js";

class GamePlay {
  async getUserInput(message) {
    const INPUT = await Console.readLineAsync(message);

    return INPUT;
  }

  isCarMoved(cars) {
    let carList = cars.split(",");
    const CAR_POINT = {};
    const CAR_MOVEPOINT = [];

    carList.map((el, idx) => {
      CAR_POINT[el] = 0;
      const number = MissionUtils.Random.pickNumberInRange(0, 9);
      CAR_MOVEPOINT.push(number);

      if (number >= 4) CAR_POINT[el] += 1;
    });

    console.log(CAR_POINT);
    console.log(carList);
    console.log(CAR_MOVEPOINT);
  }

  async getCarNames() {
    const CARS = await this.getUserInput(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );

    this.isCarMoved(CARS);
  }

  async getTryTimes() {
    const TIMES = await this.getUserInput("시도할 횟수는 몇 회인가요?");
  }
}

export default GamePlay;
