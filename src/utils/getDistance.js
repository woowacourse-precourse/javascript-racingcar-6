import { Random } from "@woowacourse/mission-utils";

export const getDistance = () => {
  const randomNumber = Random.pickNumberInRange(0, 9);
  return randomNumber >= 4 ? "-" : "";
};
