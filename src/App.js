import Input from "./Input";
import RaceRound from "./RaceRound";
class App {
  async play() {
    const carNames = await Input.enterCarNames();
    const totalRound = await Input.enterTryingCount();

    const raceRound = new RaceRound(carNames, totalRound);
    raceRound.proceedRound();
  }
}

export default App;
