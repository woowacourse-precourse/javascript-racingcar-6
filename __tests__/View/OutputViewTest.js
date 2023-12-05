import { MissionUtils } from "@woowacourse/mission-utils";

import OutputView from "../../src/View/OutputView";
import Car from "../../src/Model/Car";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("OutputView 테스트", () => {
  test("새로운 줄을 출력한다", () => {
    // given
    const logSpy = getLogSpy();

    // when
    OutputView.printNewLine();

    // then
    expect(logSpy).toHaveBeenCalledWith("");
  });

  test("실행 결과 메시지를 출력한다", () => {
    // given
    const logSpy = getLogSpy();

    // when
    OutputView.startGame();

    // then
    expect(logSpy).toHaveBeenCalledWith("실행 결과");
  });

  test("주어진 자동차의 이름과 위치를 출력한다", () => {
    // given
    const logSpy = getLogSpy();
    const car = new Car("pobi");
    car.move();
    car.move();

    // when
    OutputView.printProcess(car);

    // then
    expect(logSpy).toHaveBeenCalledWith("pobi : --");
  });

  test("우승자를 출력한다", () => {
    // given
    const logSpy = getLogSpy();
    const winner = "pobi, woni";

    // when
    OutputView.printWinner(winner);

    // then
    expect(logSpy).toHaveBeenCalledWith(`최종 우승자 : pobi, woni`);
  });
});
