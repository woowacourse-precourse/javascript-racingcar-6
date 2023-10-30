import { MissionUtils } from "@woowacourse/mission-utils";

const getRandomNumber = () => {
  const NUMBER = MissionUtils.Random.pickNumberInRange(0, 9);

  return NUMBER;
};

export default getRandomNumber;
