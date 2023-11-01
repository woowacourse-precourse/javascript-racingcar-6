import { Console } from "@woowacourse/mission-utils";
import { InputError } from "../errors/index.js";

export const INPUT_PROMPT = "시도할 횟수는 몇 회인가요?\n";
export const ERROR_MESSAGES = Object.freeze({
  NOT_POSITIVE_INTEGER: "입력값은 1 이상의 숫자여야 합니다.",
});

const inputGameRoundCount = async () => {
  const input = await Console.readLineAsync(INPUT_PROMPT);

  if (!isPositiveInteger(input)) {
    throw new InputError(ERROR_MESSAGES.NOT_POSITIVE_INTEGER);
  }

  return input;
};

const isPositiveInteger = (str) => {
  return /^[1-9]\d*$/.test(str);
};

export default inputGameRoundCount;
