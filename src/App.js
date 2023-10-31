import RacingInput from "./RacingCar/RacingInput";
import RacingScore from "./RacingCar/RacingScore";

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
