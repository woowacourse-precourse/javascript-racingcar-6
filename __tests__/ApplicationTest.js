import App from "../src/app/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => { // ["pobi,woni", "1"]
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

describe("자동차 경주 게임", () => {
  test("전진-정지", async () => {
    // given
    const MOVING_FORWARD = 4; // 전진을 나타내는 숫자
    const STOP = 3; // 정지를 나타내는 숫자
    const inputs = ["pobi,woni", "1"]; // 포비는 4라서 전진, 워니는 3이라서 정지
    const outputs = ["pobi : -"];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test.each([
    [["pobi,javaji"]],
    [["pobi,eastjun"]],
    [["poby"]], // 자동차 1개 불가
    [["p$by,poby"]], // 특수문자 불가
    [["pobi,poby,"]] // 마지막 문자 쉼표 불가
  ])("이름에 대한 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});
