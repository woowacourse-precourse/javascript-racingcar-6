import { Console, Random } from "@woowacourse/mission-utils";
import Result from "./Result";
import CAR from "./constants/Constants";
import MESSAGE from "./constants/Messages";

class Play {
  racing(carList) {
    carList.forEach((car) => {
      const isMove =
        Random.pickNumberInRange(CAR.move.min, CAR.move.max) >=
        CAR.move.standard;

      if (isMove) car.move();

      Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });

    Console.print("\r");
  }

  raceStart(numberOfTimes, carList) {
    const inputNumber = !Number.isNaN(numberOfTimes);
    const inputString = isNaN(numberOfTimes);
    const isEmpty = numberOfTimes.length == 0 || numberOfTimes.includes(" ");
    Console.print("\n실행 결과");

    if (inputNumber) {
      for (let i = 1; i <= numberOfTimes; i++) {
        this.racing(carList);
      }
    }

    if (inputString) {
      throw new Error("[ERROR] " + MESSAGE.error.INVALID_TYPE);
    }

    if (isEmpty) {
      throw new Error("[ERROR] " + MESSAGE.error.INVALID_TYPE);
    }
  }

  async enterAttempt(carList) {
    const numberOfTimes = await Console.readLineAsync(MESSAGE.read.ATTEMPT);
    this.raceStart(numberOfTimes, carList);
    const result = new Result();
    result.FinalResult(carList);
  }
}

export default Play;
