import { Random } from "@woowacourse/mission-utils";

export function generateRandomNumber() {
  return Random.pickNumberInRange(0, 9);
}
