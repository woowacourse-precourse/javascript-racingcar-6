import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("플레이어 이름 유효성 확인 검사", () => {
  test("플레이어 이름에 숫자 포함", async () => {
    // given
    const inputs = ["pobi1, jun"];
    mockQuestions(inputs);

    // when
    const app = new App();

    //then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("플레이어 이름에 한글 영어 이외의 문자 확인 검사", async () => {
    // given
    const inputs = ["pobi#, jun"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("플레이어 이름 중복 확인 검사", async () => {
    // given
    const inputs = ["pobi, pobi"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("플레이어 이름 길이 확인 검사", async () => {
    // given
    const inputs = ["pobijun, pobi"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});

describe("시도 횟수 유효성 검사", () => {
  test("시도 횟수에 문자 입력", async () => {
    // given
    const inputs = ["pobi, jun", "k"];
    mockQuestions(inputs);

    // when
    const app = new App();

    //then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("시도 횟수에 0입력", async () => {
    // given
    const inputs = ["pobi, jun", "0"];
    mockQuestions(inputs);

    // when
    const app = new App();

    //then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("시도 횟수에 음수 입력", async () => {
    // given
    const inputs = ["pobi, jun", "-1"];
    mockQuestions(inputs);

    // when
    const app = new App();

    //then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("시도 횟수에 소수 입력", async () => {
    // given
    const inputs = ["pobi, jun", "1.1"];
    mockQuestions(inputs);

    // when
    const app = new App();

    //then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});
