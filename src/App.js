import InputView from "./view/inputView.js";
import RacingController from "./controller/RacingController.js";

class App {
  async play() {
    // 게임 준비
    const racingCarNames = await InputView.readRacingCarNames();
    const attemptCount = await InputView.readAttemptCount();
    const racingController = new RacingController(racingCarNames, attemptCount);

    // 게임 시작
    racingController.start();

    // 게임 종료
    racingController.end();
  }
}

export default App;
