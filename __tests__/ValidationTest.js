import { MissionUtils } from "@woowacourse/mission-utils";
import { UserInputCarNames } from "../src/Game/UserInputCarNames";
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
});

