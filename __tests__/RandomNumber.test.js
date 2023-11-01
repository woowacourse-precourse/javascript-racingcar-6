import RandomNumber from "../src/RandomNumber.js";

expect.extend({
  toBeWithinRange(value, min, max) {
    const pass = value >= min && value <= max;
    if (pass) {
      return {
        message: "랜덤 숫자가 범위 내에 생성되었습니다.",
        pass: true,
      };
    } else {
      return {
        message: "랜덤 숫자가 범위 내에 생성되지 않았습니다.",
        pass: false,
      };
    }
  },
});

describe("랜덤 숫자 범위 검증", () => {
  test("랜덤으로 추출한 숫자가 0부터 9사이를 반환", async () => {
    expect(RandomNumber.getRandomNumber()).toBeWithinRange(0, 9);
  });
});
