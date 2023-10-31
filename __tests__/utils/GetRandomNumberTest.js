import { RACING } from "../../src/constants/carRacing";
import { getRandomNumberInRange } from "../../src/utils/getRandomNumberInRange";

describe("0~9 사이에서 무작위 값을 구하는 함수 확인", () => {
  test("0~9 사이의 숫자가 반환된다.", () => {
    const randomNumber = getRandomNumberInRange(RACING.MIN_NUMBER_OF_RANDOM_RANGE, RACING.MAX_NUMBER_OF_RANDOM_RANGE);

    expect(randomNumber).toBeGreaterThanOrEqual(RACING.MIN_NUMBER_OF_RANDOM_RANGE);
    expect(randomNumber).toBeLessThanOrEqual(RACING.MAX_NUMBER_OF_RANDOM_RANGE);
  })
});
