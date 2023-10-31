// import { NUMBER_RANGE } from "../constants/constant";
import { Random } from "@woowacourse/mission-utils";
import { NUMBER_RANGE } from "../constants/constant.js";

export const getRandomNumber = async () => {
  return Random.pickNumberInRange(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);
};

export const isMove = async () => {
  const RANDOM = await getRandomNumber();
  return RANDOM >= 4 ? true : false;
};
