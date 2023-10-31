import CarRacingModel from "../Model/CarRacingModel.js";
import CarRacingView from "../View/CarRacingView.js";
import Validation from "../Validation/Validation.js";
import { Console } from "@woowacourse/mission-utils";

const validation = new Validation();

class CarRacingController {
  constructor() {
    this.carRacingModel = new CarRacingModel();
    this.carRacingView = new CarRacingView();
  }
  async race() {
    await this.inputCar();
    await this.inputTrialNumber();
    this.carRacingView.printResultMessage();

    const carData = this.carRacingModel.getCarData();

    carData.forEach(() => {
      this.carRacingModel.moveOrStay(carData);
      this.carRacingView.printResult(carData);
      this.carRacingView.lineBreak();
    });

    this.carRacingView.printWinner(carData);
  }

  async inputCar() {
    let carNameString = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    validation.isValidCarName(carNameString);
    this.carRacingModel.setCarData(carNameString);
  }

  async inputTrialNumber() {
    let trialNumber = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    validation.isValidTrialNumber(trialNumber);
    this.carRacingModel.setTrialNumber(trialNumber);
  }
}
export default CarRacingController;
