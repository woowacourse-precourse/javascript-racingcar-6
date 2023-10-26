import ConsoleOutput from "../views/ConsoleOutput.js";
import ConsoleInput from "../views/ConsoleInput.js";

class RaceGame {
  async startGame() {
    ConsoleOutput.printStartMessage();
    ConsoleInput.getCarNames();
  }
}

export default RaceGame;
