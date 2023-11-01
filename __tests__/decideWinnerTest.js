import decideWinner from "../src/decideWinner";
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};
describe("decideWinner", () => {
  test("단일 우승자 테스트", () => {
    //given
    const logSpy = getLogSpy();
    const player = {
      car1: "-----",
      car2: "----",
    };
    //when
    decideWinner(player);
    //then
    expect(logSpy).toHaveBeenCalledWith("최종 우승자 : car1");
  });

  test("공동 우승자 테스트", () => {
    //given
    const logSpy = getLogSpy();
    const player = {
      car1: "---",
      car2: "---",
    };
    //when
    decideWinner(player);
    //then
    expect(logSpy).toHaveBeenCalledWith("최종 우승자 : car1, car2");
  });
});
