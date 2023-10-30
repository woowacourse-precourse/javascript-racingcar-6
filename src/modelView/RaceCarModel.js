import { MissionUtils } from "@woowacourse/mission-utils";
import { SETTING } from "../constants/gameConfig.js";

const ModelView = {
  currentMovements: {},

  playGame(validNames) {
    const raceResults = {};

    for (const name of validNames) {
      if (!this.currentMovements[name]) {
        this.currentMovements[name] = "";
      }
      const movement = this.calcMoveCount();
      this.currentMovements[name] += movement;
      raceResults[name] = this.currentMovements[name];
    }

    return raceResults;
  },

  calcMoveCount() {
    const movementCount = MissionUtils.Random.pickNumberInRange(SETTING.min, SETTING.max);
    return movementCount >= 4 ? "-" : "";
  },

  calculateWinners(names) {
    const winners = [];
    let maxDashes = 0;

    for (const name of names) {
      const dashes = (this.currentMovements[name].match(/-/g) || []).length;
      if (dashes > maxDashes) {
        maxDashes = dashes;
        winners.length = 0;
        winners.push(name);
      } else if (dashes === maxDashes) {
        winners.push(name);
      }
    }

    return winners;
  },
};

export default ModelView;
