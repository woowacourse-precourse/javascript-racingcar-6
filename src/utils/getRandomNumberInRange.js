import { Random } from "@woowacourse/mission-utils";

export const getRandomNumberInRange = (min, max) => {
  return Random.pickNumberInRange(min, max);
};
