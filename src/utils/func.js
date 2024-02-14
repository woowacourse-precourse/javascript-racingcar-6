import { Random } from "@woowacourse/mission-utils";

export const makeRandomNumber = (start = 0, end = 9) => {
  return Random.pickNumberInRange(start, end);
};
