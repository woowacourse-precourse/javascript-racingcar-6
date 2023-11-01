import { Console } from "@woowacourse/mission-utils";
import Participant from "./Participant.js";
import Attempt from "./Attempt.js";
import RacingGame from "./RacingGame.js";
import OutputView from "./OutputView.js";
import { GAME_MESSAGE } from "./Constant.js";

class GameMain {
  constructor() {
    this.racingGame = new RacingGame();
    this.outputView = new OutputView();
  }

  async userCarName() {
    const userInput = await Console.readLineAsync(GAME_MESSAGE.GAME_START);
    this.participant = new Participant(userInput);
    this.racingGame.getParticipant(userInput);

    if (this.participant.validate()) this.userInputTry();
  }

  async userInputTry() {
    const input = await Console.readLineAsync(GAME_MESSAGE.TRY_INPUT);
    this.userTryInput = Number(input);

    this.Attempt = new Attempt(this.userTryInput);
    if (this.Attempt.validate()) this.racingGame.getAttempt(this.userTryInput);
    this.resultTitle();
  }

  resultTitle() {
    Console.print(GAME_MESSAGE.GAME_RESULT);
    this.gamePlaying();
  }

  gamePlaying() {
    const [memberList, isEnd] = this.racingGame.isPlaying();
    this.outputView.gameProcessing(memberList);
    if (!isEnd) this.gamePlaying();
    else {
      this.outputView.gameEndPrint(this.racingGame.gameFinish());
    }
  }
}

export default GameMain;
