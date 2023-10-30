import { Random } from "@woowacourse/mission-utils";

const MIN_TRY_NUMBER = 0;
const MIN_RANDOM_NUMBER = 0;
const MAX_RANDOM_NUMBER = 9;
const MOVABLE_THRESHOLD = 4;

export function isInvalidTryNumber(number) {
  return isNaN(number) || number <= MIN_TRY_NUMBER;
}

export function getRandomNumber() {
  return Random.pickNumberInRange(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
}

export function isMovable(number) {
  return number >= MOVABLE_THRESHOLD;
}
