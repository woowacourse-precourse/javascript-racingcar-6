import { Console } from "@woowacourse/mission-utils";

export default function inputConsoleAsync(message) {
  return Console.readLineAsync(message);
}
