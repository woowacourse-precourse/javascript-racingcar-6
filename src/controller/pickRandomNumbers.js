import { Random } from "@woowacourse/mission-utils";

const pickRandomNumbers = (count) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(Random.pickNumberInRange(1, 9));
  }
  return result;
};

export default pickRandomNumbers;
