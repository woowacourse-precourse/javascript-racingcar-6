import { Random } from "@woowacourse/mission-utils";

/**
 * 0에서 9사이의 랜덤한 숫자를 반환하는 함수
 * @returns 0~9 사이의 숫자
 */
function getRandomNumber() {
  return Random.pickNumberInRange(0, 9);
}

export default getRandomNumber;
