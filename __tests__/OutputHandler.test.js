import { MissionUtils } from "@woowacourse/mission-utils";
import OutputHandler from "../src/OutputHandler.js";
import MESSAGE from "../src/constant/MESSAGE.js";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("메시지 출력", () => {
  test("게임을 시작할 때 '실행 결과' 출력하기", () => {
    const logSpy = getLogSpy();
    OutputHandler.printInitialExecutionMessage();
    expect(logSpy).toHaveBeenCalledWith(MESSAGE.INITIAL_RACE_EXECUTION);
  });
});
