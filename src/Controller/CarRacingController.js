import CarRacingModel from "../Model/CarRacingModel.js";
import CarRacingView from "../View/CarRacingView.js";
import Validation from "../Validation/Validation.js";
import CONSTANTS from "../Constants/Constants.js";
import { Console } from "@woowacourse/mission-utils";

class CarRacingController {
  constructor() {
    this.carRacingModel = new CarRacingModel();
    this.carRacingView = new CarRacingView();
  }
  async race() {
    await this.inputCarName();
    await this.inputTrialNumber();
    this.carRacingView.printResultMessage();

    const trialNumber = this.carRacingModel.getTrialNumber();
    const carData = this.carRacingModel.getCarData();

    for (let i = 0; i < trialNumber; i++) {
      this.carRacingModel.moveOrStay(carData);
      this.carRacingView.printResult(carData);
      this.carRacingView.lineBreak();
    }

    this.carRacingView.printWinner(this.carRacingModel.getCarData());
  }

  async inputCarName() {
    let carNameString = await Console.readLineAsync(CONSTANTS.INPUT.CAR_NAMES);
    Validation.isValidCarName(carNameString);
    Validation.isSameCarName(carNameString);
    this.carRacingModel.setCarData(carNameString);
  }

  async inputTrialNumber() {
    let trialNumber = await Console.readLineAsync(CONSTANTS.INPUT.TRIAL_NUMBER);
    Validation.isValidTrialNumber(trialNumber);
    this.carRacingModel.setTrialNumber(trialNumber);
  }
}
export default CarRacingController;
