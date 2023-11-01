import GameInProgress from "../../../../src/controller/game/GameInProgress";
import ProgressOutput from "../../../../src/view/output/ProgressOutput";
import TEST_NAME from "../../../../src/constants/testName";

describe("RacingGame gameInProgress 테스트", () => {
  test("각 자동차의 결과가 출력 되어야 함.", () => {
    // given
    const keyValue = [
      {
        [TEST_NAME.carOne]: "-",
        [TEST_NAME.carTwo]: "",
        [TEST_NAME.carThree]: "--",
      },
    ];
    ProgressOutput.gameInProgressPrint = jest.fn();
    // when
    GameInProgress(keyValue);
    // then
    keyValue.forEach((value) => {
      const name = Object.keys(value)[0];
      const hyphen = value[name];
      expect(ProgressOutput.gameInProgressPrint).toHaveBeenCalledWith(
        name,
        hyphen
      );
    });
  });
});
