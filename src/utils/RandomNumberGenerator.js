import { Random } from "@woowacourse/mission-utils";

export const RandomNumberGenerator = {
  generateRandomNumber(cars) {
    const numbers = [];
    cars.map(() => numbers.push(Random.pickNumberInRange(0, 9)));
    return numbers;
  },
};
