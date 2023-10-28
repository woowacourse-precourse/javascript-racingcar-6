import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./module/message.js";
import GameManager from "./game-manager.js";
import Player from "./player.js";
import { validatePlayerName } from "./module/validate.js";

class RacingGame {
  constructor() {
    this.gameManager = new GameManager();
  }

  async startGame() {
    await this.getCarRacePlayer();
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
}

export default RacingGame;
