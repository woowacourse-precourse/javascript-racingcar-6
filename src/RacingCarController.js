import InputView from './Views/InputView';
import Validator from '../utils/Validator';
import CONSTANTS from '../utils/Constants';
import RacingCar from './RacingCar';

class RacingCarController {
  constructor() {
    this.racingCar = new RacingCar();
  }

  play() {
    this.readCarNames();
  }
  readCarNames() {
    const carNames = InputView.readCarNames();
    const carNamesArray = carNames.split(CONSTANTS.delimiter);
    this.handleCarNames(carNamesArray);
  }
  handleCarNames(carNamesArray) {
    Validator.validateCarNames(carNamesArray);
    this.racingCar.generateCars(carNamesArray);
  }
}

export default RacingCarController;
