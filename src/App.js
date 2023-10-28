import { MissionUtils, Console } from "@woowacourse/mission-utils";
import carRacing from "./racing.js";

class App {
  async play() {
    try {
      const carNames = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );

      const count = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      console.log(carNames);
      const splittedCarNames = carNames.split(",");
      console.log(splittedCarNames);
      carRacing(splittedCarNames, count);
    } catch (err) {}
  }
}

export default App;
