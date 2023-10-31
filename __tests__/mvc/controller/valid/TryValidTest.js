import TRY_ERROR_MESSAGE from "../../../../src/constants/tryErrorMessage.js";
import TryValid from "../../../../src/controller/valid/TryValid.js";

describe("시도 횟수 입력 테스트", () => {
  test("문자가 입력된 경우", async () => {
    // given
    const tryValid = new TryValid();
    const input = "a";

    // when, then
    await expect(() => tryValid.tryIsValid(input)).toThrow(
      `${TRY_ERROR_MESSAGE.stringError}`
    );
  });

  test.each([["abc"], ["hyuri"], ["jonghyeon"]])(
    "문자가 입력된 경우",
    async (input) => {
      //given
      const tryValid = new TryValid();

      //when, then
      await expect(() =>
        tryValid.tryIsValid(input).toThrow(`${TRY_ERROR_MESSAGE.stringError}`)
      );
    }
  );

  test.each([["1.5"], ["179.4"], [Math.PI]])(
    "소수점이 입력된 경우",
    async (input) => {
      //given
      const tryValid = new TryValid();

      //when, then
      await expect(() =>
        tryValid.tryIsValid(input).toThrow(`${TRY_ERROR_MESSAGE.pointError}`)
      );
    }
  );

  test.each([["0"], ["000"], ["000000000000000000000000000000000"]])(
    "0이 입력된 경우",
    async (input) => {
      //given
      const tryValid = new TryValid();

      //when, then
      await expect(() =>
        tryValid.tryIsValid(input).toThrow(`${TRY_ERROR_MESSAGE.oneAboveError}`)
      );
    }
  );

  test.each([["-3"], ["-12345"], [-Infinity]])(
    "음수가 입력된 경우",
    async (input) => {
      //given
      const tryValid = new TryValid();

      //when, then
      await expect(() =>
        tryValid.tryIsValid(input).toThrow(`${TRY_ERROR_MESSAGE.oneAboveError}`)
      );
    }
  );

  test.each([[""], [" "], ["      "]])("공백이 입력된 경우", async (input) => {
    //given
    const tryValid = new TryValid();

    //when, then
    await expect(() =>
      tryValid.tryIsValid(input).toThrow(`${TRY_ERROR_MESSAGE.spaceError}`)
    );
  });

  test("유효한 값을 입력한 경우", async () => {
    // given
    const tryValid = new TryValid();
    const input = "7";

    // when, then
    await expect(() => tryValid.tryIsValid(input)).not.toThrow();
  });
});
