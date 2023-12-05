import { Random } from "@woowacourse/mission-utils";

export const generateRandom = () => {
  return Random.pickNumberInRange(0, 9);
};
