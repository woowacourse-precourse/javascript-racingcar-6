import InputView from './Views/InputView';
import Validator from '../utils/Validator';
import CONSTANTS from '../utils/Constants';

class RacingCarController {
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
  }
}

export default RacingCarController;
