import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

// inputs 배열을 받아와서 차례대로 promise로 반환
const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

// numbers 배열을 받아와서 랜덤값을 리턴하는 모의함수의 결과값으로 사용
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
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
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

  // 이름 입력 test
  test.each([
    [["pobi,javaji"]],
    [["pobi,eastjun"]],
    [["seoji,"]],
    [["서진/서진"]],
    [["seoji|yeonz"]],
    [["seoji yeonz"]],
    [["@dee#$,hi!!!!"]]
  ])("이름에 대한 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.getUserNameInput()).rejects.toThrow("[ERROR]");
  });

  // 게임 횟수 입력 test
  test.each([
    [['k']],
    [[0]],
    [['-1']],
    [['0']]
  ])("게임 횟수에 대한 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.getRoundNumInput()).rejects.toThrow("[ERROR]");
  });

});