import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGES } from "./module/message.js";
import {
  MIN_FORWARD_THRESHOLD,
  RANDOM_MAX,
  RANDOM_MIN,
  SINGLE_STEP,
} from "./module/constants.js";

class GameManager {
  constructor() {
    this.playerGroup = [];
    this.attemptCount = null;
    this.winner = null;
  }

  registerPlayer(player) {
    this.playerGroup.push(player);
  }

  shouldGoForward() {
    const randomNum = Random.pickNumberInRange(RANDOM_MIN, RANDOM_MAX);
    return randomNum >= MIN_FORWARD_THRESHOLD;
  }

  performAttempt() {
    this.playerGroup.forEach((player) => {
      if (this.shouldGoForward()) player.moveDistance += 1;
    });
  }

  printCurrentProgress() {
    this.playerGroup.forEach((player) => {
      const progress = SINGLE_STEP.repeat(player.moveDistance);
      Console.print(`${player.name} : ${progress}`);
    });
    Console.print(MESSAGES.NEW_LINE);
  }

  playRacing() {
    Console.print(MESSAGES.RESULT);
    for (let i = 0; i < this.attemptCount; i++) {
      this.performAttempt();
      this.printCurrentProgress();
    }
  }

  findWinner() {
    const maxDistance = Math.max(
      ...this.playerGroup.map((player) => player.moveDistance)
    );
    this.winner = this.playerGroup.filter(
      (player) => player.moveDistance === maxDistance
    );
  }

  announceWinner() {
    const winners = this.winner.map((player) => player.name).join(", ");
    Console.print(`${MESSAGES.FINAL_WINNER_MESSAGE}${winners}`);
  }
}

export default GameManager;
