import { MissionUtils } from "@woowacourse/mission-utils";

const getUserInput = async (command) => {
  try {
    return await MissionUtils.Console.readLineAsync(command);
  } catch (error) {
    throw new Error(error);
  }
};
