import gameInProgress from "../../../../src/mvc/controller/game/gameInProgress";
import progressOutput from "../../../../src/mvc/view/output/progressOutput";
import testName from "../../../../src/mvc/constants/testName";

describe("RacingGame gameInProgress 테스트", () => {
  test("각 자동차의 결과가 출력 되어야 함.", () => {
    // given
    const keyValue = [{ [testName.carOne]: "-", [testName.carTwo]: "", [testName.carThree]: "--" }];
    progressOutput.gameInProgressPrint = jest.fn();
    // when
    gameInProgress(keyValue);
    // then
    keyValue.forEach((value) => {
      const name = Object.keys(value)[0];
      const hyphen = value[name];
      expect(progressOutput.gameInProgressPrint).toHaveBeenCalledWith(name, hyphen);
    });
  });
});
