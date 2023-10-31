import { MissionUtils } from "@woowacourse/mission-utils";
import { SETTING } from "../constants/gameConfig.js";

const ModelView = {
  currentMovements: {},

  playGame(validNames) {
    const raceResults = {};

    validNames.forEach((raceCarName) => {
      if (!this.currentMovements[raceCarName]) {
        this.currentMovements[raceCarName] = "";
      }
      const movement = this.calcMovementCount();
      this.currentMovements[raceCarName] += movement;
      raceResults[raceCarName] = this.currentMovements[raceCarName];
    });

    return raceResults;
  },

  calcMovementCount() {
    const movementCount = MissionUtils.Random.pickNumberInRange(SETTING.min, SETTING.max);

    return movementCount >= 4 ? "-" : "";
  },

  calcWinners(names) {
    const winners = [];
    let maxDashes = 0;

    names.forEach((name) => {
      const dashes = (this.currentMovements[name].match(/-/g) || []).length;
      if (dashes > maxDashes) {
        maxDashes = dashes;
        winners.length = 0;
        winners.push(name);
      } else if (dashes === maxDashes) {
        winners.push(name);
      }
    });

    return winners;
  },
};

export default ModelView;
