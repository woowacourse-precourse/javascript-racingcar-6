import { Random } from "@woowacourse/mission-utils";

const generateRandomNumber = () => {
  return Random.pickNumberInRange(0, 9);
};

export default generateRandomNumber;
