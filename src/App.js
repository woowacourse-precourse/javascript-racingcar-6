import InputView from "./View/InputView.js";
import OutputView from "./View/OutputView.js";
import CarRace from "./Model/CarRace.js";
import { OUTPUT_MESSAGE } from "./constants/message.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  #carRace;

  async play() {
    await this.#setGameConfig();
    this.#startRace();
    this.#getWinner();
  }

  async #setGameConfig() {
    const carNameList = await InputView.getCarNameInput();
    const raceCount = await InputView.getRaceCountInput();
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
