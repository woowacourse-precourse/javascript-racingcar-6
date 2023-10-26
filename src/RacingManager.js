import { Console } from "@woowacourse/mission-utils";

class RacingManager {
  async gameStart() {
    const car = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    const trial = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    let carArr = [];
    carArr = car.split(",");

    // Console.print(carArr);
  }
}

export default RacingManager;
