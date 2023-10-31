import { MissionUtils } from "@woowacourse/mission-utils";

export const readLineAsync = (input) => {
  return MissionUtils.Console.readLineAsync(input);
};

export const print = (message) => {
  return MissionUtils.Console.print(message);
};
