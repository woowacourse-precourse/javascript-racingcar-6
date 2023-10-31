import { Console } from "@woowacourse/mission-utils";

export const input = (message) => {
  return Console.readLineAsync(message);
}
