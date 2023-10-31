import { GAME_RULE } from "../Constant";
import { MissionUtils as MU } from "@woowacourse/mission-utils";

export const pickProgressRandomBool = () => {
  const [MIN, MAX] = [
    GAME_RULE.MIN_RANDOM_NUM_INCLUSIVE,
    GAME_RULE.MAX_RANDOM_NUM_INCLUSIVE,
  ];
  const randomValue = MU.Random.pickNumberInRange(MIN, MAX);
  return Boolean(GAME_RULE.MIN_NUM_TO_PROGRESS <= randomValue);
};
