import { Console, Random } from "@woowacourse/mission-utils";
import Result from "./Result";

class Race {
  async start(carsArray, numberOfTries) {
    Console.print("");
    Console.print("실행 결과");

    for (let i = 0; i < numberOfTries; i += 1) {
      this.carMoveForward(carsArray);
    }

    const RacingResult = new Result();
    await RacingResult.start(carsArray);
  }

  carMoveForward(carsArray) {
    carsArray.forEach((car) => {
      this.moveForwardByRandomNumber(car);
      Console.print(this.getForwardResult(car));
    });
    Console.print("");
  }

  moveForwardByRandomNumber(car) {
    if (Random.pickNumberInRange(0, 9) >= 4) {
      car.forward += "-";
    }
  }

  getForwardResult(car) {
    return `${car.name} : ${car.forward}`;
  }
}

export default Race;
