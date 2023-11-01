import { MissionUtils } from "@woowacourse/mission-utils";
import { UserInputCarNames } from "../src/Game/UserInputCarNames";
import { UserInputRounds } from "../src/Game/UserInputRounds";
import { ERROR } from "../src/constants";

jest.mock("@woowacourse/mission-utils", () => ({
  MissionUtils: {
    Console: {
      readLineAsync: jest.fn(),
    },
  },
}));

describe("유효성 검사 테스트", () => {
  test("5자가 넘어가는 자동차 이름 예외 처리", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue('Lamborghini,Maserati,Ferrari');
    await expect(
      UserInputCarNames.getCarNames()
    ).rejects.toThrow(ERROR.carNameInputLong);
  });

  test("숫자가 아닌 경주 회차 예외 처리", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue('five');
    await expect(
      UserInputRounds.getNumberOfRounds()
    ).rejects.toThrow(ERROR.roundInputNumber);
  });

  test("양수가 아닌 경주 회차 예외 처리", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue('-3');
    await expect(
      UserInputRounds.getNumberOfRounds()
    ).rejects.toThrow(ERROR.roundInputPositive);
  });
});

