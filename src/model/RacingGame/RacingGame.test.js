import { RacingGameState } from "../../constanst/game.js";
import { Console } from "../../utils/console/console.js";
import { ErrorMessage } from "../../utils/message/message.js";
import RacingGame from "./RacingGame.js";

const names = ["a", "b", "c"];
const count = 3;
const mockConsole = (inputs) => {
  Console.print = jest.fn();
  Console.readLineAsync = jest.fn();
  Console.readLineAsync.mockImplementation(async () => Promise.resolve(inputs.shift()));
};
const testFail = () => {
  expect(false).toBeTruthy();
};

describe("RacingGame 객체 테스트", () => {
  let racingGame;

  beforeEach(() => {
    racingGame = new RacingGame();
  });

  test("field가 private으로 선언되어 있는지 확인", () => {
    expect(racingGame.racingCars).toBeUndefined();
    expect(racingGame.totalCount).toBeUndefined();
  });

  test("입력받은 횟수 만큼 진행하는지 확인", async () => {
    const inputs = [names.join(","), String(count)];
    mockConsole(inputs);
    await racingGame.start();

    expect(Console.readLineAsync).toHaveBeenCalledTimes(2);
    expect(Console.print).toHaveBeenCalledTimes(2 + count * (names.length + 1));
  });

  test("getWinners 검증", async () => {
    const inputs = [names.join(","), String(count)];
    mockConsole(inputs);
    await racingGame.start();
    const winners = racingGame.getWinners();

    expect(names).toEqual(expect.arrayContaining(winners));
  });

  test("시도 횟수 숫자가 아닌 값이면 오류 => IncorrectFormatError", async () => {
    const inputs = ["a", "숫자가 아닙니다."];
    mockConsole(inputs);
    const errorMessage = ErrorMessage.incorrectFormatErrorMessage();
    try {
      await racingGame.start();
      testFail();
    } catch (e) {
      expect(e.message).toBe(`[ERROR] ${errorMessage}`);
    }
  });

  test(`자동차 이름 ${RacingGameState.MAX_NAME_LENGTH}자 초과하면 오류 => OutOfRangeError`, async () => {
    const inputs = ["aaaaaa", 0];
    mockConsole(inputs);
    const errorMessage = ErrorMessage.outOfRangeErrorMessage(RacingGameState.MAX_NAME_LENGTH);
    try {
      await racingGame.start();
      testFail();
    } catch (e) {
      expect(e.message).toBe(`[ERROR] ${errorMessage}`);
    }
  });
});
