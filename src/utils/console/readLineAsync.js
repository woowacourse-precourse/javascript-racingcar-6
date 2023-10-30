import { Console } from "@woowacourse/mission-utils";

export const readLineAsync = async (message) => {
  const input = await Console.readLineAsync(message);
  return input;
};
