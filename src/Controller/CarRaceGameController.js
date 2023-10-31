import Input from "../Input/Input";
import CompareRaceCarResult from "../Compare/CompareRaceCarResult";

class CarRaceGameController {
  #raceCars;

  async InputRaceCarName() {
    await Input.readInputRaceCarName((input) => {
      this.setRaceCars(input);
    });
  }

  async InputRaceCarNumberOfAttempts() {
    await Input.readInputRaceCarNumberOfAttempts((input) => {});
  }

  async setRaceCars(racecars) {
    this.#raceCars = new CompareRaceCarResult(racecars);
    await this.InputRaceCarNumberOfAttempts();
  }
}

export default CarRaceGameController;
