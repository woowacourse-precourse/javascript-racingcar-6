import { SYMBOLS } from '../constants/symbols.js';

import { validateCarNames } from '../validations/carNamesValidation.js';
import { validateCommon } from '../validations/commonValidation.js';
import { validateMoveCount } from '../validations/moveCountValidation.js';

import { InputView, OutputView } from '../views/index.js';

import RacingGameService from '../service/RacingCarGameService.js';

class RacingCarGameController {
  #inputView = InputView;

  #racingGameService = RacingGameService;

  #outputView = OutputView;

  async run() {
    await this.#processRacingGame();
  }

  async #processRacingGame() {
    const racingCarNames = await this.#requireRacingCarNames();
    const moveCount = await this.#requireRacingCarMoveCount();
    const { racingResult, racingWinners } = this.#racingGameService.calculateRacingCarGameResult(
      racingCarNames,
      moveCount,
    );
    this.#outputView.printRacingGameResult({ racingResult, racingWinners });
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
