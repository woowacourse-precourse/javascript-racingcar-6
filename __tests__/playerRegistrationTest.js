import playerRegistration from "../src/playerRegistration";
import { MissionUtils } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils");

beforeEach(() => {
  MissionUtils.Console.readLineAsync.mockClear();
});

describe("플레이어 입력 테스트", () => {
  it("배열로 변환 테스트", async () => {
    // 모킹된 readLineAsync를 설정
    MissionUtils.Console.readLineAsync.mockResolvedValue("pobi,woni");

    const result = await playerRegistration(
      "Enter player names separated by comma"
    );
    expect(result).toEqual(["pobi", "woni"]);
  });

  it("5자리 초과입력시 에러 출력", async () => {
    // 모킹된 readLineAsync를 설정
    MissionUtils.Console.readLineAsync.mockResolvedValue("12456,abcefg");

    try {
      await playerRegistration("Enter player names separated by comma");
      // 예외를 던지지 않으면 실패 처리
      fail("Expected an error to be thrown.");
    } catch (error) {
      expect(error.message).toBe("[ERROR] 입력은 최대 5글자까지");
    }
  });
});
