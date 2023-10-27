import { Console } from "@woowacourse/mission-utils";
import { GAMEMSG } from "./constants/message.js";

class RacingGame {
  constructor() {}

  async start() {
    Console.print(GAMEMSG.inputCarName);
  }
}

export default RacingGame;
