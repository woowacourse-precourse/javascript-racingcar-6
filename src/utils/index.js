import { MissionUtils, Console } from "@woowacourse/mission-utils";

const printMessage = (message) => {
  return Console.print(message);
};

const readLineAsync = async (message) => {
  return (await Console.readLineAsync(message)).trim();
};

const pickNumberInRange = (min, max) => {
  return MissionUtils.Random.pickNumberInRange(min, max);
};

const throwError = (message, condition = true) => {
  if (!condition) {
    return;
  }

  throw new Error(message);
};

export { printMessage, readLineAsync, pickNumberInRange, throwError };