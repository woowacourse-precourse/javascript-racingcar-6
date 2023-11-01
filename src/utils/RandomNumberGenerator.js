import { Random } from "@woowacourse/mission-utils";

export const RandomNumberGenerator = {
  generateRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  },
};
