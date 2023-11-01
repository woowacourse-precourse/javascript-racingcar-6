import { Console } from "@woowacourse/mission-utils";
import GameSettingInput from "../src/GameSettingInput.js";

jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    readLineAsync: jest.fn(),
  },
}));

describe("GameSettingInput", () => {
  let gameSettingInput;

  beforeEach(() => {
    Console.readLineAsync.mockClear();
  });

  test("should collect car names and trial count correctly", async () => {
    // given
    Console.readLineAsync
      .mockResolvedValueOnce("pobi,woni")
      .mockResolvedValueOnce("3");

    // when
    const result = await GameSettingInput.collect();

    // then
    expect(result).toEqual({ carNames: ["pobi", "woni"], trialCount: 3 });
  });

  test("should validate car names correctly", () => {
    // given
    const validCarNames = ["pobi", "woni"];
    const invalidCarNames = ["pobi", "woni", "anylongname"];

    // when & then
    expect(() => GameSettingInput.validate(validCarNames)).not.toThrow();
    expect(() => GameSettingInput.validate(invalidCarNames)).toThrow(
      "[ERROR] 자동차 이름은 5글자 이하여야 합니다."
    );
  });
});
