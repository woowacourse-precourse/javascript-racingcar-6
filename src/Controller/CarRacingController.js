import CarRacingModel from "../Model/CarRacingModel.js";
import CarRacingView from "../View/CarRacingView.js";
import Validation from "../Validation/Validation.js";
import CONSTANTS from "../Constants/Constants.js";
import { Console } from "@woowacourse/mission-utils";

const validation = new Validation();

class CarRacingController {
  constructor() {
    this.carRacingModel = new CarRacingModel();
    this.carRacingView = new CarRacingView();
  }
  async race() {
    await this.inputCarName();
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

  async inputCarName() {
    let carNameString = await Console.readLineAsync(CONSTANTS.INPUT.CARNAMES);
    validation.isValidCarName(carNameString);
    this.carRacingModel.setCarData(carNameString);
  }

  async inputTrialNumber() {
    let trialNumber = await Console.readLineAsync(CONSTANTS.INPUT.TRIALNUMBER);
    validation.isValidTrialNumber(trialNumber);
    this.carRacingModel.setTrialNumber(trialNumber);
  }
}
export default CarRacingController;
