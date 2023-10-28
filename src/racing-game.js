import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./module/message.js";
import GameManager from "./game-manager.js";
import Player from "./player.js";
import { validateAttemptCount, validatePlayerName } from "./module/validate.js";

class RacingGame {
  constructor() {
    this.gameManager = new GameManager();
  }

  async startGame() {
    await this.getCarRacePlayer();
    await this.getAttemptCount();

    this.gameManager.playRacing();
  }

  async getCarRacePlayer() {
    try {
      const input = await Console.readLineAsync(
        MESSAGES.CAR_RACE_NAME_INPUT_PROMPT
      );

      const nameArr = input.split(",").map((name) => name.trim());
      nameArr.forEach((name) => {
        validatePlayerName(name);
        const player = new Player(name);
        this.gameManager.registerPlayer(player);
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getAttemptCount() {
    try {
      const input = await Console.readLineAsync(
        MESSAGES.ATTEMPT_COUNT_INPUT_PROMPT
      );
      validateAttemptCount(input);
      this.gameManager.attemptCount = input;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default RacingGame;
