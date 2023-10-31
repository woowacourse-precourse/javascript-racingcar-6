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

    const namesAndDistances = this.carRacingModel.getNamesAndDistances();

    namesAndDistances.forEach(() => {
      this.carRacingModel.moveOrStay(namesAndDistances);
      this.carRacingView.printResult(namesAndDistances);
      this.carRacingView.lineBreak();
    });

    this.carRacingView.printWinner(namesAndDistances);
  }

  async inputCar() {
    let carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    validation.isValidCarName(carNames);
    this.carRacingModel.setNamesAndDistances(carNames);
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
