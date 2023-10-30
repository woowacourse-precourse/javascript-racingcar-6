import { Console } from "@woowacourse/mission-utils";
import GAME_MESSAGE from "../../src/MVC/Constants/gameMessage";
import winner from "../../src/MVC/controller/game/winner";

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("RacingGame winner 테스트", () => {
  test("테스트 케이스 1: 최대 이동 거리를 가진 자동차가 우승해야 함", () => {
    // given
    const keyValue = [{ hyuri: "--" }, { hyu: "---" }, { rim: "----" }];
    const logSpy = getLogSpy();

    // when
    winner(keyValue);

    // then
    expect(logSpy).toHaveBeenCalledWith(`${GAME_MESSAGE.winner}rim`);
  });

  test("테스트 케이스 2: 우승자가 여러 명인 경우 모든 우승자를 출력해야 함", () => {
    // given
    const keyValue = [{ hyuri: "----" }, { hyu: "---" }, { rim: "----" }];
    const logSpy = getLogSpy();

    // when
    winner(keyValue);

    // then
    expect(logSpy).toHaveBeenCalledWith(`${GAME_MESSAGE.winner}hyuri, rim`);
  });
});
