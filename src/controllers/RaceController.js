import Race from "../models/Race.js";
import RaceView from "../views/RaceView.js";
import { Console } from "@woowacourse/mission-utils";

export default class RaceController {
  constructor() {
    this.race = null;
  }

  async initRace() {
    try {
      RaceView.displayCarNamesInput();
      const carNamesInput = await Console.readLineAsync("");
      const carNames = carNamesInput.split(",").map((name) => name.trim());

      RaceView.displayTrialInput();
      const trialCount = parseInt(await Console.readLineAsync(""), 10);

      if (isNaN(trialCount) || trialCount <= 0) {
        throw "NUMBER_ERROR";
      }

      this.race = new Race(carNames);
      this.startRace(trialCount);
    } catch (error) {
      RaceView.displayError(error);
    }
  }

  async startRace(trials) {
    for (let i = 0; i < trials; i++) {
      this.race.runRound();
      RaceView.displayRaceResult(this.race.cars);
    }

    const winners = this.race.findWinners();
    RaceView.displayWinners(winners);
  }
}
