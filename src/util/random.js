import { NUMBER_RANGE } from "../constants/constant";

export async function getRandomNumber() {
  return Random.pickNumberInRange(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);
}
