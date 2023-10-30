import InputView from './Views/InputView';
import OutputView from './Views/OutputView';
import Validator from '../utils/Validator';
import CONSTANTS from '../utils/Constants';
import RacingCar from './RacingCar';

class RacingCarController {
  async play() {
    await this.readCarNames();
    this.readTrialCount();
  }
  async readCarNames() {
    const carNames = await InputView.readCarNames();
    const carNamesArray = carNames.split(CONSTANTS.delimiter);
    this.handleCarNames(carNamesArray);
  }
  handleCarNames(carNamesArray) {
    Validator.validateCarNames(carNamesArray);
    this.racingCar = new RacingCar(carNamesArray);
  }
  async readTrialCount() {
    const trialCount = Number(await InputView.readTrialCount());
    this.handleTrialCount(trialCount);
  }
  handleTrialCount(trialCount) {
    Validator.validateTrialCount(trialCount);
    this.racingCar.tryProgress(trialCount);
    this.printResult();
  }

  printResult() {
    OutputView.printMessage(this.racingCar.getFinalResult());
  }
}

export default RacingCarController;
