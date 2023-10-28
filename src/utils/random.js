import { Random } from "@woowacourse/mission-utils";

const pickRandomSingleDigitNumber = () => {
  return Random.pickNumberInRange(0, 9);
};

export { pickRandomSingleDigitNumber };
