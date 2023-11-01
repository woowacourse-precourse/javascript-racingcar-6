import { Console } from "@woowacourse/mission-utils";
import carRacing from "./racing.js";
import printRacingResult from "./racingResult.js";
import { isValidCarName, isValidAttemptCounts } from "./validation.js";

class App {
  async play() {
    try {
      const carNames = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );

      const splittedCarNames = carNames.split(",");
      isValidCarName(splittedCarNames);

      const attempt = await Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?\n"
      );
      isValidAttemptCounts(attempt);

      Console.print("\n실행결과");
      const forwardNumber = carRacing(splittedCarNames, attempt);
      printRacingResult(splittedCarNames, forwardNumber);
    } catch (err) {
      throw err;
    }
  }
}

export default App;
