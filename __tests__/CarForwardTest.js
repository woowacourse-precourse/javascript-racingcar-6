import { MissionUtils } from "@woowacourse/mission-utils";
import Race from "../src/Race";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("랜덤 값에 따른 전진 결과 테스트", () => {
  test("랜덤 값이 4 이상이면 전진", async () => {
    mockRandoms([3, 1, 6, 4, 1, 5]);

    const logSpy = getLogSpy();

    const RaceResult = new Race();
    await RaceResult.start(
      [
        { name: "jh", forward: "" },
        { name: "woo", forward: "" },
        { name: "hi", forward: "" },
      ],
      "2",
    );

    expect(logSpy).toHaveBeenCalledWith("최종 우승자 : hi");
  });
});
