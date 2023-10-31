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

  test.each([
    [["pobi,javaji"]],
    [["pobi,eastjun"]]
  ])("이름에 대한 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});

// 밑에서부터 본인이 작성한 테스트 코드

describe("inputCarNamesAsync", () => {
  test("자동차 이름 설정하기", async () => {
    const validInput = "pobi,woni";
    const app = new App();
    const mockReadLineAsync = jest.fn(() => Promise.resolve(validInput));
    MissionUtils.Console.readLineAsync = mockReadLineAsync;

    await app.inputCarNamesAsync();

    expect(mockReadLineAsync).toHaveBeenCalledWith("경주할 자동차 이름을 입력하세요 (이름은 쉼표(,)로 구분):");
    expect(app.cars).toEqual([{ name: "pobi", position: 0 }, { name: "woni", position: 0 }]);
  });

  test("5자 이상인 이름은 오류 발생 시키기", async () => {
    // 주어진
    const invalidInput = "pobi,verylongname";
    const app = new App();
    const mockReadLineAsync = jest.fn(() => Promise.resolve(invalidInput));
    MissionUtils.Console.readLineAsync = mockReadLineAsync;

    // 실행 및 확인
    await expect(app.inputCarNamesAsync()).rejects.toThrow("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
  });

  test("이름 내의 공백을 처리하기", async () => {
    // 주어진
    const inputWithWhitespace = "  pobi , woni  ";
    const app = new App();
    const mockReadLineAsync = jest.fn(() => Promise.resolve(inputWithWhitespace));
    MissionUtils.Console.readLineAsync = mockReadLineAsync;

    // 실행
    await app.inputCarNamesAsync();

    // 당연히
    expect(app.cars).toEqual([{ name: "pobi", position: 0 }, { name: "woni", position: 0 }]);
  });
});
