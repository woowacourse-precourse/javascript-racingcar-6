import playerRegistration from "../src/playerRegistration";
import { MissionUtils } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils");

beforeEach(() => {
  MissionUtils.Console.readLineAsync.mockClear();
});

describe("playerRegistration 함수", () => {
  it("올바른 입력을 받아서 배열로 반환", async () => {
    // 모킹된 readLineAsync를 설정
    MissionUtils.Console.readLineAsync.mockResolvedValue("pobi,woni");

    const result = await playerRegistration(
      "Enter player names separated by comma"
    );
    expect(result).toEqual(["pobi", "woni"]);
  });

  it("5자리를 초과하는 입력이 들어오면 에러를 던짐", async () => {
    // 모킹된 readLineAsync를 설정
    MissionUtils.Console.readLineAsync.mockResolvedValue("123456,abcdefg");

    try {
      await playerRegistration("Enter player names separated by comma");
      // 예외를 던지지 않으면 실패 처리
      fail("Expected an error to be thrown.");
    } catch (error) {
      expect(error.message).toBe("[ERROR] 입력은 최대 5글자까지");
    }
  });
});
