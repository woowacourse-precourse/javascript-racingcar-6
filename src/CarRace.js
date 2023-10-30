import { MissionUtils } from "@woowacourse/mission-utils";
import carHandler from "./utils/carHandler";
import numberHandler from "./utils/numberHandler";
import resultHandler from "./utils/resultHandler";

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
    MissionUtils.Console.print("실행 결과");

    const [RESULT_STRING, NEW_CARS] = resultHandler.getResultString({
      tryNumber: this.#tryNumber,
      cars: this.#cars,
    });
    this.setCars(NEW_CARS);
    MissionUtils.Console.print(RESULT_STRING);

    const WINNER = resultHandler.getWinner(this.#cars);
    resultHandler.printWinner(WINNER);
  }
}

export default CarRace;
