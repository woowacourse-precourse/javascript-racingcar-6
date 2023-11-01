import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR } from "../src/pages/text.js";

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

describe("예외 테스트", () => {
  test("5자 이상", async () => {
    // given
    const MOVING_FORWARD = 4; // 전진
    const STOP = 3; //정지
    const inputs = ["banana,apple", "1"]; // 유저의 입력값 설정
    //const outputs = [ERROR.number]; //에러가 없을 때 예상 출력값
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]"); // 에러 처리
  });

  test("이모지 6개 이상 예외 테스트", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["🍉🍉🍉🍉🍉🍉", "1"];
    const outputs = [ERROR.length];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("특수문자 예외처리", async () => {
    // given
    const MOVING_FORWARD = 4; // 전진
    const STOP = 3; //정지
    const inputs = ["!@#$%^", "1"]; // 유저의 입력값 설정
    //const outputs = [ERROR.number]; //에러가 없을 때 예상 출력값
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]"); // 에러 처리
  });

  test("한글 예외처리", async () => {
    // given
    const MOVING_FORWARD = 4; // 전진
    const STOP = 3; //정지
    const inputs = ["바나나먹고싶다", "1"]; // 유저의 입력값 설정
    //const outputs = [ERROR.number]; //에러가 없을 때 예상 출력값
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]"); // 에러 처리
  });
});
