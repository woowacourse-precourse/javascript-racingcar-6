import { Console } from "@woowacourse/mission-utils";
import { systemMessage } from "./message.js";
import RacingGame from "./RacingGame.js";
import InputCarsException from "./InputCarsException.js";
import InputTryCountException from "./InputTryCountException.js";

class App {
  async play() {
    try {
      // 시스템 시작
      Console.print(systemMessage.START);
      let cars = await Console.readLineAsync("");

      // 입력받은 경주할 자동차들에 대한 예외처리
      cars = new InputCarsException(cars).check();

      // 시도횟수 입력
      Console.print(systemMessage.TRY_COUNT);
      let tryCount = await Console.readLineAsync("");

      // 입력받은 시도횟수에 대한 예외처리
      tryCount = new InputTryCountException(tryCount).check();
      Console.print("");

      // 레이싱게임 진행
      let winner = new RacingGame(cars, tryCount).racing();

      // 최종 우승자 출력하기
      Console.print(`최종 우승자 : ${winner.join(", ")}`);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
