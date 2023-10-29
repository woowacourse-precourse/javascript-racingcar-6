import InputView from "./View/InputView.js";
import CarRace from "./Model/CarRace.js";

class App {
  #carRace;

  async play() {
    await this.#setGameConfig();
    this.#startRace();
  }

  async #setGameConfig() {
    const carNameList = await InputView.getCarNameInput();
    const raceCount = await InputView.getRaceCountInput();
    this.#carRace = new CarRace(carNameList, raceCount);
  }

  #startRace() {
    const raceResult = this.#carRace.doRace();
    console.log(raceResult);
  }
}

export default App;
