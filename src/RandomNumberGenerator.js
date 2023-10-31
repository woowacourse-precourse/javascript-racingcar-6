import { Random } from "@woowacourse/mission-utils";

export const randomNumberGenerator = () => {
  const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);
  if (RANDOM_NUMBER >= 4) {
    return true;
  } else {
    return false;
  }
};
