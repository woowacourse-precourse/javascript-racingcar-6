import { MissionUtils } from "@woowacourse/mission-utils";

export const randomNumber = () => {
  const number = MissionUtils.Random.pickNumberInRange(0, 9);
  return number;
};

const overFour = (number) => {
  return number >= 4;
};

const underFour = (number) => {
  return number < 4;
};

export const checkMoving = () => {
  let number = randomNumber();
  let isMoving = false;
  let isStop = false;
  if (overFour(number)) {
    return (isMoving = true);
  }
  if (underFour(number)) {
    return (isStop = true);
  }
};
