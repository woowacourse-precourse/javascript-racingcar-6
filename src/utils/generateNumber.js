import { Random } from "@woowacourse/mission-utils";

const generateNumber = (min, max) => {
  const number = Number(Random.pickNumberInRange(min, max));
  return number;
};

export default generateNumber;
