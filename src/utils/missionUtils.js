import { MissionUtils } from "@woowacourse/mission-utils";

export const readInput = (question) =>
  MissionUtils.Console.readLineAsync(question);

export const printOutput = (output) => MissionUtils.Console.print(output);

export const getRandomeNumberInRange = (min, max) =>
  MissionUtils.Random.pickNumberInRange(min, max);
