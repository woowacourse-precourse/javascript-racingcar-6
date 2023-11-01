import { MissionUtils } from "@woowacourse/mission-utils";

const readLineAsync = async (message) =>
  MissionUtils.Console.readLineAsync(message);

const print = (message) => MissionUtils.Console.print(message);

const pickNumberInRange = (startInclusive, endInclusive) =>
  MissionUtils.Random.pickNumberInRange(startInclusive, endInclusive);

const pickUniqueNumbersInRange = (startInclusive, endInclusive, count) =>
  MissionUtils.Random.pickUniqueNumbersInRange(
    startInclusive,
    endInclusive,
    count
  );

export { readLineAsync, print, pickNumberInRange, pickUniqueNumbersInRange };
