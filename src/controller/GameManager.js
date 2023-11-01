import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Game from "../game/Game.js";
class GameManager {
  constructor() {
    this.game = new Game();
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  // 게임 초기 설정 (자동차 이름, 게임 시도횟수 설정)
  async initGame() {
    this.outputView.printInitMessage();
    const CAR_NAMES_INPUT = await this.inputView.askCarName();
    this.game.storeCars(CAR_NAMES_INPUT);
  }

  // 레이스 게임 시작
  async startRace() {
    const ATTEMPT_COUNT = await this.inputView.askAttemptCount();
    this.outputView.printResultMessage();
    for (
      let attemptedCount = 0;
      attemptedCount < ATTEMPT_COUNT;
      attemptedCount++
    ) {
      this.game.playEachRaceGame();
      this.outputView.printeachRaceGame();
    }
  }

  // 레이스 게임 마무리
  async finishGame() {
    const WINNER_NAME = this.game.getRaceWinnerCarNames();
    this.outputView.printWinner(WINNER_NAME);
  }

  // 전체적인 게임 로직
  async playGame() {
    await this.initGame();
    await this.startRace();
    await this.finishGame();
  }
}
export default GameManager;
