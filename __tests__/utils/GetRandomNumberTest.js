import { RACING } from "../../src/constants/carRacing.js";
import { getRandomNumberInRange } from "../../src/utils/getRandomNumberInRange.js";

describe("0~9 사이에서 무작위 값을 구하는 함수 확인", () => {
  test("0~9 사이의 숫자가 반환된다.", () => {
    const randomNumber = getRandomNumberInRange(RACING.RANDOM_RANGE_MIN_VALUE, RACING.RANDOM_RANGE_MAX_VALUE);

    expect(randomNumber).toBeGreaterThanOrEqual(RACING.RANDOM_RANGE_MIN_VALUE);
    expect(randomNumber).toBeLessThanOrEqual(RACING.RANDOM_RANGE_MAX_VALUE);
  })
});
