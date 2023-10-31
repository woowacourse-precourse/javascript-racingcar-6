// import { NUMBER_RANGE } from "../constants/constant";
import { Random } from "@woowacourse/mission-utils";
import { NUMBER_RANGE } from "../constants/constant.js";

export async function getRandomNumber() {
  return Random.pickNumberInRange(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);
}

export async function isMove() {
  const RANDOM = await getRandomNumber();
  return RANDOM >= 4 ? true : false;
}
