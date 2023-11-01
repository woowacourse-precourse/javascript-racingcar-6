import printResult from "../src/printResult";
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};
describe("printResult", () => {
  test("단일 우승자 테스트", () => {
    //given
    const logSpy = getLogSpy();
    const player = {
      car1: "-----",
      car2: "----",
    };
    //when
    printResult(player);
    //then
    expect(logSpy).toHaveBeenCalledWith("car1 : -----");
    expect(logSpy).toHaveBeenCalledWith("car2 : ----");
  });
});
