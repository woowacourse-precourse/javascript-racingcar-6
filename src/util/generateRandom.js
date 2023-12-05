import { Random } from "@woowacourse/mission-utils";

export const generateRandom = (count) => {
  const result = [];
  while (result.length < count) {
    const random = Random.pickNumberInRange(0, 9);
    result.push(random);
  }

  return result;
};
