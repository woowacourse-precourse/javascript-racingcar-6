import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/gameConfig.js";

const InputView = {
  async readUserRaceCarName() {
    try {
      const userInputRaceCarName = await MissionUtils.Console.readLineAsync(
        `${MESSAGE.game.getName}\n`,
      );
      const RaceCarList = InputView.validateRaceCarNames(userInputRaceCarName);

      return RaceCarList;
    } catch (e) {
      throw new Error(MESSAGE.error);
    }
  },

  async readAttemptsCount() {
    try {
      const userInputAttemptsCount = await MissionUtils.Console.readLineAsync(
        `${MESSAGE.game.AttemptsCount}\n`,
      );
      const AttemptsCount = this.validateAttemptsCount(userInputAttemptsCount);

      return parseInt(AttemptsCount, 10);
    } catch (e) {
      throw new Error(MESSAGE.error);
    }
  },

  validateRaceCarNames(userInputRaceCarName) {
    const validRaceCarName = userInputRaceCarName.split(",").map((raceCar) => raceCar.trim());
    for (const raceCar of validRaceCarName) {
      if (raceCar.length > 5) {
        throw new Error();
      }
    }

    return validRaceCarName;
  },

  validateAttemptsCount(userInputAttemptsCount) {
    if (isNaN(userInputAttemptsCount)) {
      throw new Error();
    }

    return userInputAttemptsCount;
  },
};

export default InputView;
