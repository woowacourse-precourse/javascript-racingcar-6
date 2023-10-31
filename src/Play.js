import { MissionUtils } from "@woowacourse/mission-utils";
import Result from "./Result";
import CAR from "./constants/constant";
import MESSAGE from "./constants/MESSAGE";

class Play {
  racing(carList) {
    carList.forEach((car) => {
      const number = MissionUtils.Random.pickNumberInRange(
        CAR.move.min,
        CAR.move.max
      );

      if (number >= CAR.move.standard) {
        car.move();
      }

      MissionUtils.Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });

    MissionUtils.Console.print("\r");
  }

  raceStart(numberOfTimes, carList) {
    const inputNumber = !Number.isNaN(numberOfTimes);
    const inputString = isNaN(numberOfTimes);
    const hasEmty = numberOfTimes.length == 0 || numberOfTimes.includes(" ");
    MissionUtils.Console.print("\n실행 결과");

    if (inputNumber) {
      for (let i = 1; i <= numberOfTimes; i++) {
        this.racing(carList);
      }
    }

    if (inputString) {
      throw new Error("[ERROR] " + MESSAGE.error.INVALID_TYPE);
    }

    if (hasEmty) {
      throw new Error("[ERROR] " + MESSAGE.error.INVALID_TYPE);
    }
  }

  async enterNumberOfTimes(carList) {
    const numberOfTimes = await MissionUtils.Console.readLineAsync(
      MESSAGE.read.ATTEMPT
    );
    this.raceStart(numberOfTimes, carList);
    const result = new Result();
    result.FinalResult(carList);
  }
}

export default Play;
