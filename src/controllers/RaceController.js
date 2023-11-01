import { ERROR_MESSAGES } from "../constants/Messages.js";
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
      const carNames = this.validateCarNames(carNamesInput);

      RaceView.displayTrialInput();
      const trialCount = this.validateTrialCount(
        await Console.readLineAsync("")
      );

      this.race = new Race(carNames);
      this.startRace(trialCount);
    } catch (error) {
      RaceView.displayError(error);
    }
  }

  validateCarNames(input) {
    const carNames = input.split(",").map((name) => name.trim());
    if (carNames.some((name) => name.length > 5 || name.length === 0)) {
      throw Console.print(ERROR_MESSAGES.CARNAME_ERROR);
    }
    return carNames;
  }

  validateTrialCount(input) {
    const trialCount = parseInt(input, 10);
    if (isNaN(trialCount) || trialCount <= 0) {
      throw Console.print(ERROR_MESSAGES.NUMBER_ERROR);
    }
    return trialCount;
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
