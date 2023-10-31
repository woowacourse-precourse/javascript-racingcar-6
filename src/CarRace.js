import carHandler from "./handler/carHandler";
import numberHandler from "./handler/numberHandler";
import resultHandler from "./handler/resultHandler";
import { printOutput } from "./utils/MissionUtils";

class CarRace {
  #cars;

  #tryNumber;

  async handleCar() {
    const INPUT = await carHandler.readCarsInput();

    const CAR_NAMES = INPUT.split(",");
    const CAR_CLASSES = carHandler.handleCarConvertedToClass(CAR_NAMES);
    this.setCars(CAR_CLASSES);
  }

  setCars(carClasses) {
    this.#cars = [...carClasses];
  }

  async handleTryNumber() {
    const TRY_NUMBER = await numberHandler.readTryNumber();
    this.setTryNumber(TRY_NUMBER);
  }

  setTryNumber(number) {
    this.#tryNumber = number;
  }

  handleRaceResult() {
    printOutput("실행 결과");

    const [RESULT_STRING, NEW_CARS] = resultHandler.getResultString({
      tryNumber: this.#tryNumber,
      cars: this.#cars,
    });
    this.setCars(NEW_CARS);
    printOutput(RESULT_STRING);

    const WINNER = resultHandler.getWinner(this.#cars);
    resultHandler.printWinner(WINNER);
  }
}

export default CarRace;
