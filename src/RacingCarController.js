import InputView from './Views/InputView.js';
import OutputView from './Views/OutputView.js';
import Validator from '../utils/Validator.js';
import CONSTANTS from '../utils/Constants.js';
import RacingCar from './RacingCar.js';

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
    this.tryProgress(trialCount);
  }

  tryProgress(trialCount) {
    OutputView.printResultMessage();
    for (let i = 1; i <= trialCount; i += 1) {
      this.racingCar.tryProgress();
      OutputView.printProgressStatus(this.racingCar);
    }
    OutputView.printWinner(this.racingCar);
  }
}

export default RacingCarController;
