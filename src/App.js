import { Console, Random } from "@woowacourse/mission-utils";
import { systemMessage } from "./global/message";
import { distanceNumber } from "./global/number";

class App {
  racing(cars, tryCount) {
    for (let i = 0; i < tryCount; i++) {
      for (let j = 0; j < cars.length; j++) {
        let distance = Random.pickNumberInRange(
          distanceNumber.MIN_DISTANCE_LENGTH,
          distanceNumber.MAX_DISTANCE_LENGTH
        );
        if (distance >= 4) {
          cars[j] += "-";
        }
        Console.print(`${cars[j]} : ${cars[j]}`);
      }
    }
  }

  async play() {
    try {
      // 여기서 시작 메세지 출력
      let cars = await Console.readLineAsync(systemMessage.START);
      cars = cars.split(",");
      let tryCount = await Console.readLineAsync(systemMessage.TRY_COUNT);
      tryCount = Number(tryCount);
      this.racing(cars, tryCount);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
