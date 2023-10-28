import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      const CAR_NAMES_INPUT = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const CAR_NAMES = CAR_NAMES_INPUT.split(",").map((name) => name.trim());

      const ROUNDS_INPUT = await Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?\n"
      );
      const ROUNDS = parseInt(ROUNDS_INPUT, 10);

      if (isNaN(ROUNDS) || ROUNDS <= 0) {
        throw new Error("올바른 숫자를 입력해주세요.");
      }

      console.log(CAR_NAMES, ROUNDS);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
