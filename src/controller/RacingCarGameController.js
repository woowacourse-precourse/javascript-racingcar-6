import { SYMBOLS } from '../constants/symbols.js';

import { validateCarNames } from '../validations/carNamesValidation.js';
import { validateCommon } from '../validations/commonValidation.js';
import { validateMoveCount } from '../validations/moveCountValidation.js';

import { InputView } from '../views/index.js';

class RacingCarGameController {
  #inputView = InputView;

  async run() {
    await this.#processRacingGame();
  }

  async #processRacingGame() {
    const racingCarNames = await this.#requireRacingCarNames();
    const moveCount = await this.#requireRacingCarMoveCount();
    console.log(racingCarNames, moveCount);
  }

  async #requireRacingCarNames() {
    const inputRacingCarNames = await this.#requireInputRacingCarNames();
    const racingCars = inputRacingCarNames.split(SYMBOLS.comma);
    validateCommon(inputRacingCarNames);
    validateCarNames(racingCars);
    return racingCars;
  }

  // TODO: 추상화 레벨 줄이기
  #requireInputRacingCarNames() {
    return this.#inputView.readRacingCarNames();
  }

  async #requireRacingCarMoveCount() {
    const inputMoveCount = await this.#requireInputRacingCarMoveCount();
    const moveCount = Number(inputMoveCount);
    validateCommon(inputMoveCount);
    validateMoveCount(moveCount);
    return inputMoveCount;
  }

  // TODO: 추상화 레벨 줄이기
  #requireInputRacingCarMoveCount() {
    return this.#inputView.readRacingCarMoveCount();
  }
}

export default RacingCarGameController;
