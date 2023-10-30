import { Random, Console } from "@woowacourse/mission-utils";
import message from "./message.js";
import {
  validateAndDisplayResult,
  validateCarNames,
  validateDisplayWinner,
} from "./validation.js";

class App {
  async play() {
    const playerRacecar = await Console.readLineAsync(message.START_MESSAGE);
    const allRacecars = playerRacecar.trim().split(",");
    let carScores = new Array(allRacecars.length).fill(0);

    // racecar 유효성 검사
    validateCarNames(allRacecars);

    // 참여자 점수 iteration, 출력
    const ROTATION = await Console.readLineAsync(message.INPUT_ROTATION);
    Console.print(message.DISPLAYING_RESULTS_MSG);
    for (let i = 0; i < ROTATION; i++) {
      validateAndDisplayResult(allRacecars, carScores);
    }

    // 최종 우승자 출력 함수
    validateDisplayWinner(carScores, allRacecars);
  }
}

export default App;
const app = new App();
app.play();
