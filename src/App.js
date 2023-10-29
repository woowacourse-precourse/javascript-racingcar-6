import { readUserRaceCarName, readAttemptsCount } from "./view/InputView.js";
import { printResultMsg, printRaceResult, printWinners } from "./view/OutputView.js";
import { playGame, calculateWinners } from "./modelview/Modelview.js";

class App {
  async play() {
    const names = await readUserRaceCarName();

    const tryCount = await readAttemptsCount();

    printResultMsg();

    for (let i = 0; i < tryCount; i++) {
      const raceResults = playGame(names);
      for (const name in raceResults) {
        printRaceResult(name, raceResults[name]);
      }
    }

    const winners = calculateWinners(names);

    printWinners(winners);
  }
}

export default App;
