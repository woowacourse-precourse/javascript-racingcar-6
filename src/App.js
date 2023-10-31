import RacingInput from "./RacingInput";

class App {
  async play() {
    const racingInput = new RacingInput();

    const racingArr = racingInput.racingCarInput();
    const attemptNum = racingInput.attemptNumInput();
  }
}

export default App;
