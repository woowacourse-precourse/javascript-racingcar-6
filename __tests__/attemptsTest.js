import attempts from "../src/attempts";
import { MissionUtils } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils");

beforeEach(() => {
  MissionUtils.Console.readLineAsync.mockClear();
});

it("시도 횟수 입력 테스트", async () => {
  MissionUtils.Console.readLineAsync.mockResolvedValue(3);

  const result = await attempts("횟수를 입력");

  expect(result).toBe(3);
});
