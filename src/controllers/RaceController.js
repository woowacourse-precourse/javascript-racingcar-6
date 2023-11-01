import { ERROR_MESSAGES, MESSAGES } from "../constants/Messages.js";
import Race from "../models/Race.js";
import RaceView from "../views/RaceView.js";
import { Console } from "@woowacourse/mission-utils";

export default class RaceController {
  constructor() {
    this.race = null;
  }

  async validateCarNames(input) {
    return new Promise((resolve, reject) => {
      const carNames = input.split(",").map((name) => name.trim());
      const isValid = carNames.every(
        (name) => name.length <= 5 && name.length > 0
      );

      if (!isValid) {
        reject(new Error(ERROR_MESSAGES.CARNAME_ERROR));
      } else {
        resolve(carNames);
      }
    });
  }

  async validateTrialCount(input) {
    return new Promise((resolve, reject) => {
      const trialCount = parseInt(input, 10);

      if (isNaN(trialCount) || trialCount <= 0) {
        reject(new Error(ERROR_MESSAGES.NUMBER_ERROR));
      } else {
        resolve(trialCount);
      }
    });
  }

  async initRace() {
    try {
      RaceView.displayCarNamesInput();
      const carNamesInput = await Console.readLineAsync("");
      const carNames = await this.validateCarNames(carNamesInput);

      RaceView.displayTrialInput();
      const trialCountInput = await Console.readLineAsync("");
      const trialCount = await this.validateTrialCount(trialCountInput);

      this.race = new Race(carNames);
      await this.startRace(trialCount);
    } catch (error) {
      RaceView.displayError(error.message);
      throw error;
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
