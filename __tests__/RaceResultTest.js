import { MissionUtils } from "@woowacourse/mission-utils";
import Result from "../src/Result";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("최종 우승자 출력 테스트", () => {
  test("가장 많이 전진한 자동차가 승리", async () => {
    const logSpy = getLogSpy();

    const RaceResult = new Result();
    RaceResult.start([
      { name: "jh", forward: "--" },
      { name: "woo", forward: "--" },
      { name: "hi", forward: "---" },
    ]);

    expect(logSpy).toHaveBeenCalledWith("최종 우승자 : hi");
  });
  test("가장 많이 전진한 자동차가 승리(2개 이상)", async () => {
    const logSpy = getLogSpy();

    const RaceResult = new Result();
    RaceResult.start([
      { name: "jh", forward: "-" },
      { name: "woo", forward: "--" },
      { name: "hi", forward: "--" },
    ]);

    expect(logSpy).toHaveBeenCalledWith("최종 우승자 : woo, hi");
  });
});
