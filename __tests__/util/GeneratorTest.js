import { RANDOM_NUMBER_RANGE } from "../../src/constants/setting";
import generateRandomNumber from "../../src/util/generator";

describe("0~9 사이의 랜덤 수를 반환하는 함수 확인", () => {
  test("0~9사이의 값이 정상적으로 반환된다.", () => {
    const randomNumber = generateRandomNumber();

    expect(randomNumber).toBeGreaterThanOrEqual(RANDOM_NUMBER_RANGE.MIN); // 0 이상
    expect(randomNumber).toBeLessThanOrEqual(RANDOM_NUMBER_RANGE.MAX); // 9 이하
  });
});
