import Input from "../Input/Input";
import CompareRaceCarResult from "../Compare/CompareRaceCarResult";
import CarForwardRandomNumberGenerator from "../utils/CarForwardRandomNumberGenerator";

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
  }

  async setRaceCars(racecars) {
    this.#raceCars = new CompareRaceCarResult(racecars);
    await this.InputRaceCarNumberOfAttempts();
  }

  setMoveForwardCondition() {
    this.#raceCars.map((raceCar) => {
      const randomNumber =
        CarForwardRandomNumberGenerator.RandomNumberGenerator();
      if (randomNumber >= 4) raceCar.moveForward();
    });
  }
}

export default CarRaceGameController;
