import { Console } from "@woowacourse/mission-utils";
import { validateCarNames } from "./ValidateCarNames";
import { addCarNames } from "./AddCarNames";
import { validateTrialNumbers } from "./ValidateTrialNumbers";

class App {
  constructor() {
    this.carNames = [];
    this.trialNumbers = 0;
  }

  async getCarNames() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const INPUT = await Console.readLineAsync("");
    const IS_VALID = validateCarNames(INPUT);

    if (IS_VALID) {
      addCarNames(INPUT, this.carNames);
      await this.getTrialNumbers();
    }
  }

  async getTrialNumbers() {
    Console.print("시도할 횟수는 몇 회인가요?");
    const INPUT = await Console.readLineAsync("");
    const IS_VALID = validateTrialNumbers(INPUT);

    if (IS_VALID) {
      playGame(this.trialNumbers, INPUT, this.carNames);
      this.printWinner();
    }
  }

  async play() {
    await this.getCarNames();
  }
}

export default App;
