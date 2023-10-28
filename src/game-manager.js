import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./module/message.js";

class GameManager {
  constructor() {
    this.playerGroup = [];
    this.attemptCount = null;
  }

  registerPlayer(player) {
    this.playerGroup.push(player);
  }

  performAttempt() {}

  playRacing() {
    Console.print(MESSAGES.RESULT);
    for (let i = 0; i < this.attemptCount; i++) {
      this.performAttempt();
    }
  }
}

export default GameManager;
