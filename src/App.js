import inputNames from "./data/inputNames";
import inputNumber from "./data/inputNumber";
import getWinners from "./race/getWinners";
import doRace from "./race/doRace";
import printResult from "./printResult";
class App {
  async play() {
    const names = await inputNames();
    const number = await inputNumber();
    const result = doRace(names, number);
    const winners = getWinners(result);
    printResult(winners);
  }
}

export default App;
