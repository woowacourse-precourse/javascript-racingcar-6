import { Random } from "@woowacourse/mission-utils";
import { RANDOM_NUMBER_RANGE } from "../constants/setting.js";

/**
 * 0에서 9사이의 랜덤한 숫자를 반환하는 함수
 * @returns 0~9 사이의 숫자
 */
function getRandomNumber() {
  return Random.pickNumberInRange(
    RANDOM_NUMBER_RANGE.MIN,
    RANDOM_NUMBER_RANGE.MAX
  );
}

export default getRandomNumber;
