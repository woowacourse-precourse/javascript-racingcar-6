import ConsoleOutput from "../views/ConsoleOutput.js";
import ConsoleInput from "../views/ConsoleInput.js";

class RaceGame {
  async startGame() {
    ConsoleOutput.printStartMessage();
    const cars = await ConsoleInput.getCarNames();
    ConsoleOutput.printGetAttempts();
    const attempts = await ConsoleInput.getNumberOfAttempts();
  }
}

export default RaceGame;
