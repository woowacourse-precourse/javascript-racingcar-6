import InputHandler from "../src/utils/InputHandler";
import { MissionUtils } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils", () => {
  return {
    MissionUtils: {
      Console: {
        readLineAsync: jest.fn(),
      },
    },
  };
});

describe("InputHandler 테스트", () => {
  beforeEach(() => {
    MissionUtils.Console.readLineAsync.mockClear();
  });

  test("InputHandler getCarNames 메서드 테스트", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue("test1,test2");
    const carNames = await InputHandler.getCarNames();
    expect(carNames.length).toBe(2);
  });

  test("InputHandler getRaceCount 메서드 테스트", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue("5");
    const raceCount = await InputHandler.getRaceCount();
    expect(raceCount).toBe(5);
  });
});
