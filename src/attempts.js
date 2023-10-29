import { MissionUtils } from "@woowacourse/mission-utils";

const attempts = async (answer) => {
  const userAttempts = await MissionUtils.Console.readLineAsync(answer);
  return userAttempts;
};

export default attempts;
