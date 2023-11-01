const mockCheckCarName = jest.fn((strCarName) => {
  const arrCarName = strCarName.split(",");
  arrCarName.map((name) => {
    if (name.trim().length > 5 || name.trim().length < 1) {
      throw new Error("[ERROR]");
    }
  });
});

const mockCheckAttemptNumber = jest.fn((attempts) => {
  if (attempts < 0 || isNaN(attempts) == true) {
    throw new Error("[ERROR]");
  }
});

describe("사용자 입력 테스트", () => {
  test("자동차 이름이 다섯 글자를 초과한 예외에 대한 처리 확인", async () => {
    const inputs = "abc,abcdef";

    await expect(() => mockCheckCarName(inputs)).toThrow("[ERROR]");
  });

  test("자동차 이름이 공백인 예외에 대한 처리 확인", async () => {
    const inputs = "  ";

    await expect(() => mockCheckCarName(inputs)).toThrow("[ERROR]");
  });

  test("사용자가 이동할 횟수를 잘못 입력한 예외에 대한 처리 확인", async () => {
    const inputString = "a";
    const inputNegativeNumber = -4;

    await expect(() => mockCheckAttemptNumber(inputString)).toThrow("[ERROR]");
    await expect(() => mockCheckAttemptNumber(inputNegativeNumber)).toThrow("[ERROR]");
  });
});
