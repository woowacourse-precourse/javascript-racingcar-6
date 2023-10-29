import InputView from "./View/InputView.js";
import CarRace from "./Model/CarRace.js";

class App {
  #carRace;

  async play() {
    this.#setGameConfig();
  }

  async #setGameConfig() {
    const carNameList = await InputView.getCarNameInput();
    const raceCount = await InputView.getRaceCountInput();
    this.#carRace = new CarRace(carNameList, raceCount);
    this.#carRace.consoleCar();
  }
}

export default App;
