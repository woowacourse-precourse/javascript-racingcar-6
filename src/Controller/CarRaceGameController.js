import Input from "../Input/Input";
import CompareRaceCarResult from "../Compare/CompareRaceCarResult";
import Output from "../Output/Output";

class CarRaceGameController {
  #raceCars;

  async InputRaceCarName() {
    await Input.readInputRaceCarName((input) => {
      this.setRaceCars(input);
    });
  }

  async InputRaceCarNumberOfAttempts() {
    await Input.readInputRaceCarNumberOfAttempts((input) => {
      this.#raceCars.setAttempts(input);
    });
    this.raceStart();
  }

  async setRaceCars(racecars) {
    this.#raceCars = new CompareRaceCarResult(racecars);
    await this.InputRaceCarNumberOfAttempts();
  }

  raceStart() {
    Output.printResultMessage();
    Array.from({ length: this.#raceCars.getAttempts() }).forEach(() => {
      this.#raceCars.setMoveForwardCondition();
      Output.printMoveMarking(this.#raceCars.getCurrentPosition());
      Output.printSingleLine();
    });
  }
}

export default CarRaceGameController;
