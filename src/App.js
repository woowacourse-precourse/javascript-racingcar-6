import { CONSTANTS, ERROR_MESSAGE } from "./constants.js";
import { Console } from "@woowacourse/mission-utils";
import Game from "./Game.js";


class App {
  checkRaceCount(count) {
    if (isNaN(count)) {
      throw new Error(ERROR_MESSAGE.ERROR_INPUT_NOT_A_NUMBER);
    } else if (
      count < CONSTANTS.MIN_DISTANCE ||
      count > CONSTANTS.MAX_DISTANCE
    ) {
      throw new Error(ERROR_MESSAGE.ERROR_INPUT_NOT_BETWEEN_MIN_MAX);
    }
  }

  async play() {
    let carNames = await Console.readLineAsync(
      "자동차 이름들을 입력하세요. (쉼표로 구분)\n"
    );
    carNames = carNames.split(",");
    let raceCount = parseInt(
      await Console.readLineAsync("시도할 횟수를 입력하세요.\n")
    );
    this.checkRaceCount(raceCount);
    Console.print(raceCount);

    const game = new Game(raceCount, carNames);
    Console.print("\n실행 결과");
    game.runRaces();
    game.announceWinner();
  }
}

export default App;