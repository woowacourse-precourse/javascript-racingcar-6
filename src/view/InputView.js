import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../utils/Message.js";
import { isValidCarName, isValidAttempts } from "../utils/Validation.js";

const getCarNames = async () => {
  try {
    const carNames = (await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n")).split(",");
    if (!isValidCarName(carNames)) {
      throw new Error(ERROR_MESSAGES.IS_NAME_LENGTH);
    }
    return carNames;
  } catch (error) {
    throw new Error(ERROR_MESSAGES.DEFAULT_ERROR);
  }
};

const getAttempts = async () => {
  try {
    const attempts = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요? \n");
    if (!isValidAttempts(attempts)) {
      throw new Error(ERROR_MESSAGES.IS_NAME_LENGTH);
    }
    return attempts;
  } catch (error) {
    throw new Error(ERROR_MESSAGES.DEFAULT_ERROR);
  }
};

export { getCarNames, getAttempts };
