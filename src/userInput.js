import { Console } from "@woowacourse/mission-utils";

export async function getUserData(message) {
  const userData = await Console.readLineAsync(message);
  return userData;
}