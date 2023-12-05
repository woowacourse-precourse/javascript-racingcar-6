import { Random } from "@woowacourse/mission-utils";

const RANDOM_NUMBER = Object.freeze({
  start: 0,
  end: 9,
});

const generateRandom = () => {
  return Random.pickNumberInRange(RANDOM_NUMBER.start, RANDOM_NUMBER.end);
};

export default generateRandom;
