import { MissionUtils } from "@woowacourse/mission-utils";

const getUserInput = async (command) => {
  try {
    return await MissionUtils.Console.readLineAsync(command);
  } catch (error) {
    throw new Error(error);
  }
};

export const checkCarsNameCount = (carNamesString) => {
  if (!carNamesString.includes(","))
    throw new Error(NOT_INCLUDED_COMMA_USER_INPUT_ERROR);
};
