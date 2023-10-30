import { Console } from "@woowacourse/mission-utils";
import RacingGame from "../../src/MVC/model/RacingGame";

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("RacingGame gameInProgress 테스트", () => {
  test("각 자동차의 결과가 출력 되어야 함.", () => {
    // given
    const racingGame = new RacingGame();
    const keyValue = [{ hyuri: "-", hyu: "", rim: "--" }];
    const logSpy = getLogSpy();
    // when
    racingGame.gameInProgress(keyValue);
    // then
    keyValue.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(output);
    })
  });
});
