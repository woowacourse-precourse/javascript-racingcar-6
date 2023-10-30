import { SYMBOLS } from '../constants/symbols.js';

import { validateCarNames } from '../validations/carNamesValidation.js';
import { validateCommon } from '../validations/commonValidation.js';
import { validateMoveCount } from '../validations/moveCountValidation.js';

import { InputView, OutputView } from '../views/index.js';

import RacingGameService from '../service/RacingGameService.js';

class RacingGameController {
  #inputView = InputView;

  #racingGameService = RacingGameService;

  #outputView = OutputView;

  async run() {
    await this.#processRacingGame();
  }

  async #processRacingGame() {
    const { racingResult, racingWinners } = await this.#requireRacingGameResult();
    this.#outputView.printRacingGameResult({ racingResult, racingWinners });
  }

  async #requireRacingGameResult() {
    const racingCarNames = await this.#requireRacingCarNames();
    const moveCount = await this.#requireRacingCarMoveCount();
    return this.#racingGameService.calculateRacingGameResult(racingCarNames, moveCount);
  }

  async #requireRacingCarNames() {
    const inputRacingCarNames = await this.#inputView.readRacingCarNames();
    validateCommon(inputRacingCarNames);
    const racingCars = inputRacingCarNames.split(SYMBOLS.comma);
    validateCarNames(racingCars);
    return racingCars;
  }

  async #requireRacingCarMoveCount() {
    const inputMoveCount = await this.#inputView.readRacingCarMoveCount();
    validateCommon(inputMoveCount);
    const moveCount = Number(inputMoveCount);
    validateMoveCount(moveCount);
    return inputMoveCount;
  }
}

export default RacingGameController;
