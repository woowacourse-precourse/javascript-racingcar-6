import UserInput from "../src/UserInput.js";
import RacingcarGame from "../src/RacingcarGame.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const GO = 5;
const STOP = 3;

describe("자동차 경주 게임 테스트", () => {
  test("자동차 경주를 실행하고 실행 결과를 저장한다", async () => {
    // race() 테스트
    const inputs = ["a,b,c,d", "1"];
    const randoms = [GO, STOP, GO, STOP];
    const result = { a: 1, b: 0, c: 1, d: 0 };

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const game = new RacingcarGame();
    const user = new UserInput();

    game.racingCar = await user.getCarNames();
    game.race();

    await expect(game.racingCar).toEqual(result);
  });

  test("경주 실행 결과를 자동차 이름과 함께 출력한다", async () => {
    // printRacingResult() 테스트
    const logSpy = getLogSpy();
    const outputs = ["e : -", "f : ", "g : -"];

    const game = new RacingcarGame();
    game.racingCar = { e: 1, f: 0, g: 1 };

    game.printRacingResult();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("경주 실행 결과를 보고 우승자를 선정한다", () => {
    // getWinner() 테스트
    const game = new RacingcarGame();
    game.racingCar = { h: 1, i: 3, j: 2, k: 3 };

    expect(game.getWinner()).toEqual(["i", "k"]);
  });

  test("우승자를 출력한다", () => {
    // printWinner() 테스트
  });

  test("시도 횟수만큼 경주를 실행하고, 실행 결과를 출력한다", () => {
    // start() 테스트
  });
});
