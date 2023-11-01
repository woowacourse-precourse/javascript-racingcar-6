import { Console } from "@woowacourse/mission-utils";

export async function readLine(question) {
  return await Console.readLineAsync(question);
}
