import { MissionUtils } from "@woowacourse/mission-utils";

export const randomCarsNumber = (carsLength) => {
  const result = [];

  for (let i = 1; i <= carsLength; i++) {
    result.push(MissionUtils.Random.pickNumberInRange(0, 9));
  }

  return result;
};
