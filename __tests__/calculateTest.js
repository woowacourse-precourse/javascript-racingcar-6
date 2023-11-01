import calculate from "../src/calculate";
import { MissionUtils } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils");

beforeEach(() => {
  MissionUtils.Random.pickNumberInRange.mockClear();
});

describe("경기 테스트 ", () => {
  it("랜덤 수가 4미만일 경우", () => {
    const player = ["car1", "car2"];
    const results = {};
    MissionUtils.Random.pickNumberInRange.mockReturnValue(3);
    calculate(player, results);

    expect(results).toEqual({
      car1: "",
      car2: "",
    });
  });

  it("랜덤 수가 4이상일 경우", () => {
    const player = ["car1", "car2"];
    const results = {};
    MissionUtils.Random.pickNumberInRange.mockReturnValue(4);
    calculate(player, results);

    expect(results).toEqual({
      car1: "-",
      car2: "-",
    });
  });
  it("매 결과 출력 작동 확인", () => {
    const player = ["car1", "car2"];
    const results = {};
    MissionUtils.Random.pickNumberInRange.mockReturnValue(4);
    calculate(player, results);

    for (let car in results) {
      expect(MissionUtils.Console.print).toHaveBeenCalledWith(
        expect.stringContaining(`${car} : -`)
      );
    }
  });
});
