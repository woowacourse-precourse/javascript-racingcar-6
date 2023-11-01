import CarRacingGames from "../models/carRacingGame.js";
import Validator from "../models/validator.js";

import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";

class CarRacingGamesControllers {
  constructor() {
    this.carListArr;
    this.numberOfMoves;
  }

  // 자동차 경주를 준비하는 메서드
  async prepareSettings() {
    // 자동차 이름을 입력받는다.
    const carListString = await InputView.inputCarNames();

    // 자동차 이름의 유효성을 검사한 후 { name: @string, numberOfMovesForward: @number }[]로 값 저장
    if (Validator.validateInputCarNames(carListString)) {
      this.carListArr = CarRacingGames.setupCarList(carListString);
    }

    // 시도할 횟수를 입력받는다.
    const numberOfMoves = await InputView.inputNumbersOfMoves();

    // 시도할 횟수 입력의 유효성을 검사한다.
    if (Validator.validateInputNumbersOfMoves(numberOfMoves)) {
      this.numberOfMoves = parseInt(numberOfMoves, 10);
    }
  }

  // 경주를 시작하고, 차수별 실행 결과를 출력하는 메서드
  executeForward() {
    OutputView.printNoticeOfExecutionResult();

    while (this.numberOfMoves > 0) {
      CarRacingGames.decideWheterToMoveForward(this.carListArr);
      OutputView.printExecutionResult(this.carListArr);
      this.numberOfMoves -= 1;
    }
  }

  outputFinalResult() {
    const winnerArr = CarRacingGames.getFinalWinner(this.carListArr);
    OutputView.printFinalWinner(winnerArr);
  }
}

export default CarRacingGamesControllers;
