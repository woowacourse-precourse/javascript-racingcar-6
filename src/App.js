import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";
import ModelView from "./modelView/RaceCarModel.js";

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
      MissionUtils.Console.print(" ");
    }

    const winners = ModelView.calculateWinners(names);

    OutputView.printWinners(winners);
  }
}

export default App;
