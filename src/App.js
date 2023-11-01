import { MissionUtils } from "@woowacourse/mission-utils";
import Race from "./models/Race.js";
import InputHandler from "./utils/InputHandler.js";
import { OUTPUT_MSG } from "./constants/Constants.js";

export default class App {
  constructor() {
    this.race = null;
  }

  async play() {
    try {
      const carNames = await InputHandler.getCarNames();
      const raceCount = await InputHandler.getRaceCount();

      this.race = new Race(carNames);
      MissionUtils.Console.print(OUTPUT_MSG.RESULT);
      this.race.start(raceCount);
      const winners = this.race.getWinners();

      MissionUtils.Console.print(`${OUTPUT_MSG.WINNER} ${winners.join(", ")}`);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return Promise.reject(error);
    }
  }
}
