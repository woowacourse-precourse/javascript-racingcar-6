import { Random } from "@woowacourse/mission-utils";

export const randomArrayGenerator = (arrayLength) => {
  const computer = [];

  while (computer.length < arrayLength) {
    computer.push(Random.pickNumberInRange(0,9));
  }

  return computer;
};
