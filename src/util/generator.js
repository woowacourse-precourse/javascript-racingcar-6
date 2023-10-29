import { Random } from "@woowacourse/mission-utils";
import { RANDOM_NUMBER_RANGE } from "../constants/setting.js";

/**
 * RANDOM_NUMBER_RANGE.MIN = 0
 * RANDOM_NUMBER_RANGE.MAX = 9
 * RANDOM_NUMBER_RANGE.MIN에서 RANDOM_NUMBER_RANGE.MAX사이의 랜덤한 숫자를 생성하는 함수
 * @returns RANDOM_NUMBER_RANGE.MIN ~ RANDOM_NUMBER_RANGE.MAX 사이의 숫자
 */
function generateRandomNumber() {
  return Random.pickNumberInRange(
    RANDOM_NUMBER_RANGE.MIN,
    RANDOM_NUMBER_RANGE.MAX
  );
}

export default generateRandomNumber;
