import gameInProgress from "../../src/MVC/controller/game/gameInProgress";
import Output from "../../src/MVC/view/Output";

describe("RacingGame gameInProgress 테스트", () => {
  test("각 자동차의 결과가 출력 되어야 함.", () => {
    // given
    const keyValue = [{ hyuri: "-", hyu: "", rim: "--" }];
    Output.gameInProgressPrint = jest.fn();
    // when
    gameInProgress(keyValue);
    // then
    keyValue.forEach((value) => {
      const name = Object.keys(value)[0];
      const hyphen = value[name];
      expect(Output.gameInProgressPrint).toHaveBeenCalledWith(name, hyphen);
    });
  });
});
