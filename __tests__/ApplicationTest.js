// ApplicationTest.js
import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

describe("자동차 경주 게임", () => {
  let consoleLog;

  beforeAll(() => {
    consoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterAll(() => {
    consoleLog.mockRestore();
  });

  test("전진-정지", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const outputs = ["pobi : -"];
  
    // when
    mockQuestions(inputs);
    const app = new App();
    const consoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
    await app.play();
  
    // then
    outputs.forEach((output) => {
      expect(consoleLog).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  
    // 복원
    consoleLog.mockRestore();
  });
  
  test.each([
    [["pobi,javaji"]],
    [["pobi,eastjun"]]
  ])("이름에 대한 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();
    const error = await app.play();

    // then
    expect(error).toEqual("[ERROR] 자동차 이름은 5글자 이하여야 합니다.");
  });
});
