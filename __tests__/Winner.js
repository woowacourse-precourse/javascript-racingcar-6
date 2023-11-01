import { MissionUtils } from "@woowacourse/mission-utils";
import Winner from "../src/racingGame/Winner.js"

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};


describe("Winner 클래스 테스트", () => {
  const winner = new Winner();
  const logSpy = getLogSpy();

  test("winnerPrint 메소드 테스트-단일우승자", async () => {

    // given
    const inputs = [["hyun", "mong", "car", "good"], [3, 2, 6, 1]];
    const outputs = "최종 우승자 : car";

    // when
    winner.winnerPrint(inputs)

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(outputs));

  });

  test("winnerPrint 메소드 테스트-중복우승자", async () => {

    // given
    const inputs = [["hyun", "mong", "car", "good"], [3, 6, 6, 1]];
    const outputs = "최종 우승자 : mong, car";

    // when
    winner.winnerPrint(inputs)

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(outputs));

  });

});
