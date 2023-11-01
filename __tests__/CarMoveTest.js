import { MissionUtils } from "@woowacourse/mission-utils";
import { carMoveOrStop } from "../src/CarMove.js";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 이동, 정지", () => {
  test("자동차 이동", async () => {
    // given
    const inputs = ["pobi"];
    const DETERMIDATED_NUMBER = 4;
    const outputs = ["pobi : -"];
    const logSpy = getLogSpy();

    // when
    carMoveOrStop(inputs,DETERMIDATED_NUMBER)

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("자동차 정지", async () => {
    // given
    const inputs = ["pobi"];
    const DETERMIDATED_NUMBER = 3;
    const outputs = ["pobi :"];
    const logSpy = getLogSpy();

    // when
    carMoveOrStop(inputs,DETERMIDATED_NUMBER)

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});