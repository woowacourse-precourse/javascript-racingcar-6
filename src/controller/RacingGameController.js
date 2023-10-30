import { SYMBOLS } from '../constants/symbols.js';

import { validateCarNames } from '../validations/carNamesValidation.js';
import { validateCommon } from '../validations/commonValidation.js';
import { validateMoveCount } from '../validations/moveCountValidation.js';

import { InputView, OutputView } from '../views/index.js';

import RacingGameService from '../service/RacingGameService.js';

// TODO: 네이밍 고민해보기
class RacingGameController {
  #inputView = InputView;

  #racingGameService = RacingGameService;

  #outputView = OutputView;

  async run() {
    await this.#processRacingGame();
  }

  // TODO: 세부적으로 분리할 부분 찾아보기
  async #processRacingGame() {
    const racingCarNames = await this.#requireRacingCarNames();
    const moveCount = await this.#requireRacingCarMoveCount();
    const { racingResult, racingWinners } = this.#racingGameService.calculateRacingGameResult(
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

  // TODO: requireRacingCarNames와 함께 추상화 할 수 있는 방법 찾아보기
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

export default RacingGameController;
