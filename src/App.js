import Validator from "./utils/Validator.js";
import CarRace from "./Model/CarRace.js";
import InputView from "./View/InputView.js";
import OutputView from "./View/OutputView.js";

class App {
  #carRace;

  async play() {
    await this.#setGameConfig();
    this.#startRace();
    this.#getWinner();
  }

  async #setGameConfig() {
    const carNameList = await InputView.getCarNameInput();
    Validator.validateCarName(carNameList);
    const raceCount = await InputView.getRaceCountInput();
    Validator.validateRaceCount(raceCount);
    this.#carRace = new CarRace(carNameList, raceCount);
  }

  #startRace() {
    OutputView.printResultStartMessage();
    const raceResult = this.#carRace.doRace();
    raceResult.forEach((eachResult) => {
      eachResult.forEach((result) => OutputView.printResult(result));
      OutputView.printBlank();
    });
  }

  #getWinner() {
    const winner = this.#carRace.determineWinner();
    OutputView.printWinner(winner);
  }
}

export default App;
