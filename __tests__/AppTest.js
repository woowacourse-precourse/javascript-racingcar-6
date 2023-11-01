import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils", () => {
  return {
    MissionUtils: {
      Console: {
        print: jest.fn(),
        readLineAsync: jest.fn(),
      },
      Random: {
        pickNumberInRange: jest.fn(),
      },
    },
  };
});

describe("App 테스트", () => {
  beforeEach(() => {
    MissionUtils.Console.print.mockClear();
    MissionUtils.Console.readLineAsync.mockClear();
  });

  test("App 인스턴스 생성", () => {
    const app = new App();
    expect(app.race).toBe(null);
  });

  test("App play 메서드 테스트", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValueOnce("test1,test2");
    MissionUtils.Console.readLineAsync.mockResolvedValueOnce("5");
    const app = new App();
    await app.play();
    expect(app.race).not.toBe(null);
  });
});
