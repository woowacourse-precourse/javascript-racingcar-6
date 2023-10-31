import App from "../src/App.js";
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

describe("checkWinner() 테스트", () => {
  test("우승자가 1명일 때", async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,오정환", "4"];
    const randoms = [
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("최종 우승자 : pobi"));
  });

  test("우승자가 2명 이상일 때", async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni,오정환", "3"];
    const randoms = [
      MOVING_FORWARD, //pobi -
      MOVING_FORWARD, //woni -
      MOVING_FORWARD, //오정환 -
      STOP, //pobi -
      MOVING_FORWARD, //woni --
      STOP, //오정환 -
      STOP, //pobi -
      STOP, //woni --
      MOVING_FORWARD, //오정환 --
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("최종 우승자 : woni,오정환"));
  });

  test("아무도 전진을 못하였을 때", async () => {
    const STOP = 3;
    const inputs = ["pobi,woni,오정환", "1"];
    const randoms = [STOP, STOP, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("최종 우승자 : pobi,woni,오정환"));
  });
});
