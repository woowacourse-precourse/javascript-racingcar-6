import { Console } from "@woowacourse/mission-utils";

export default async function inputConsoleAsync(message) {
  return await Console.readLineAsync(message);
}
