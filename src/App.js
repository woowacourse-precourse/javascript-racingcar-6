import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";
import ModelView from "./modelview/ModelView.js";

class App {
  async play() {
    const names = await InputView.readUserRaceCarName();

    const tryCount = await InputView.readAttemptsCount();

    OutputView.printResultMsg();

    for (let i = 0; i < tryCount; i++) {
      const raceResults = ModelView.playGame(names);
      for (const name in raceResults) {
        OutputView.printRaceResult(name, raceResults[name]);
      }
    }

    const winners = ModelView.calculateWinners(names);

    OutputView.printWinners(winners);
  }
}

export default App;
