import { MissionUtils } from '@woowacourse/mission-utils';

const print = (message) => {
  MissionUtils.Console.print(message);
};

const readLineAsync = async (query) => {
  const input = await MissionUtils.Console.readLineAsync(query);
  return input;
};

const pickNumberInRange = (startInclusive, endInclusive) => {
  const pickNumber = MissionUtils.Random.pickNumberInRange(
    startInclusive,
    endInclusive,
  );
  return pickNumber;
};

export { print, readLineAsync, pickNumberInRange };
