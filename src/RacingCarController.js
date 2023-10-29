import InputView from './Views/InputView';
import Validator from '../utils/Validator';
import CONSTANTS from '../utils/Constants';
import RacingCar from './RacingCar';

class RacingCarController {
  constructor() {
    this.racingCar = new RacingCar();
  }

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
    this.racingCar.generateCars(carNamesArray);
  }
  async readTrialCount() {
    const trialCount = Number(await InputView.readTrialCount());
    this.handleTrialCount(trialCount);
  }
  handleTrialCount(trialCount) {
    Validator.validateTrialCount(trialCount);
    for (let i = 1; i <= trialCount; i++) {
      this.progressCars();
    }
  }

  progressCars() {
    this.racingCar.progressCars();
    this.racingCar.pushEachProgressStatus();
  }
}

export default RacingCarController;
