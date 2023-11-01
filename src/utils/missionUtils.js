import { MissionUtils } from "@woowacourse/mission-utils";

export const print = (message) => MissionUtils.Console.print(message);

export const readLineAsync = async (message) =>
	MissionUtils.Console.readLineAsync(message);

export const pickNumberInRange = (startInclusive, endInclusive) =>
	MissionUtils.Random.pickNumberInRange(startInclusive, endInclusive);
