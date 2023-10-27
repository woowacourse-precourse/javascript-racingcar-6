import { SYMBOLS } from '../constants/symbols.js';

import { validateCarNames } from '../validations/carNamesValidation.js';
import { validateCommon } from '../validations/commonValidation.js';

import { InputView } from '../views/index.js';

class RacingCarGameController {
  #inputView = InputView;

  #requireInputRacingCarNames() {
    return this.#inputView.readRacingCarNames();
  }

  async #requireRacingCarNames() {
    const inputRacingCarNames = await this.#requireInputRacingCarNames();
    const racingCars = inputRacingCarNames.split(SYMBOLS.comma);
    validateCommon(inputRacingCarNames);
    validateCarNames(racingCars);
    return racingCars;
  }

  async run() {
    console.log(await this.#requireRacingCarNames());
  }
}

export default RacingCarGameController;
