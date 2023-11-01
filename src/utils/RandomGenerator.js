import { Random } from "@woowacourse/mission-utils";

export const RandomGenerator = () => {
  return Random.pickNumberInRange(0, 9);
};
