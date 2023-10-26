import ConsoleOutput from "../views/ConsoleOutput.js";
import ConsoleInput from "../views/ConsoleInput.js";

class RaceGame {
  async startGame() {
    ConsoleOutput.printStartMessage();
    await ConsoleInput.getCarNames();
    ConsoleOutput.printGetAttempts();
    await ConsoleInput.getNumberOfAttempts();
  }
}

export default RaceGame;
