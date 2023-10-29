import { MissionUtils } from "@woowacourse/mission-utils";

const InputView = {
  async readUserRaceCarName() {
    try {
      const userInputRaceCarName = await MissionUtils.Console.readLineAsync(
        `${"경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"}\n`,
      );
      const RaceCarList = InputView.validateRaceCarNames(userInputRaceCarName);

      return RaceCarList;
    } catch (e) {
      throw new Error("[ERROR] 이름은 5자 이하여야합니다.");
    }
  },

  async readAttemptsCount() {
    try {
      const AttemptsCount = await MissionUtils.Console.readLineAsync(
        `${"시도할 횟수는 몇 회인가요?"}\n`,
      );

      return parseInt(AttemptsCount, 10);
    } catch (e) {
      throw new Error("[ERROR] 입력 형식이 잘못되었습니다.");
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
};

export default InputView;
