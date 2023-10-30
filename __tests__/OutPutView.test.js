import OutputView from "../src/views/OutputView";
import { MissionUtils } from "@woowacourse/mission-utils";
import { RACE_GAME_OUTPUT_MESSAGE } from "../src/constants";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("OutputView 클래스 테스트", () => {
  test("실행 결과 문자열을 출력한다", () => {
    //given
    const outputView = new OutputView();
    const logSpy = getLogSpy();

    // when
    outputView.printRoundResultInitMessage();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(RACE_GAME_OUTPUT_MESSAGE.roundResultInit)
    );
  });

  test("각 라운드의 결과를 자동차의 이름과 이동거리를 문자열로 표현한다", () => {
    //given
    const outputView = new OutputView();
    const logSpy = getLogSpy();
    const roundResult = [
      { name: "car1", position: 3 },
      { name: "car2", position: 1 },
    ];

    // when
    outputView.printRoundStatus(roundResult);

    // then
    expect(logSpy).toHaveBeenCalledWith("car1 : ---");
    expect(logSpy).toHaveBeenCalledWith("car2 : -");
    expect(logSpy).toHaveBeenCalledWith("\n");
  });

  test("우승자 정보를 출력한다", () => {
    //given
    const outputView = new OutputView();
    const logSpy = getLogSpy();
    const winnner = ["car1"];

    // when
    outputView.printWinners(winnner);

    // then
    expect(logSpy).toHaveBeenCalledWith(
      `${RACE_GAME_OUTPUT_MESSAGE.winners}: car1`
    );
  });

  test("우승자가 여러명이라면 쉼표를 통해 출력한다", () => {
    //given
    const outputView = new OutputView();
    const logSpy = getLogSpy();
    const winnner = ["car1", "car2"];

    // when
    outputView.printWinners(winnner);

    // then
    expect(logSpy).toHaveBeenCalledWith(
      `${RACE_GAME_OUTPUT_MESSAGE.winners}: car1, car2`
    );
  });
});
