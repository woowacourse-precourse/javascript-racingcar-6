import { MissionUtils } from "@woowacourse/mission-utils";

const getNumber = () => {
  return MissionUtils.Random.pickNumberInRange(0, 9);
};

const checkNumber = (number) => {
  return number >= 4;
};

export const moveCount = () => {
  const number = getNumber();
  return checkNumber(number);
};
