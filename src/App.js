import RacingInput from "./RacingInput";
import RacingScore from "./RacingScore";

class App {
  async play() {
    const racingInput = new RacingInput();
    const racingScore = new RacingScore();

    const { racingArr, scoreArr } = await racingInput.racingCarInput();
    const attemptNum = await racingInput.attemptNumInput();

    racingScore.randomScore(attemptNum, racingArr, scoreArr);
  }
}

export default App;
