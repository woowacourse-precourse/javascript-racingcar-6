import App from "../src/App.js";
import { getLogSpy, mockQuestions, mockRandoms } from "./ApplicationTest.js";

describe("기능 테스트", () => {
  // 자동차 이름 입력
  test.each([[["a, ,"]], [["a,b b"], ["a,"]]])(
    "이름에 빈칸이 있거나 이름이 없을 때",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow("[ERROR]");
    }
  );

  test("이름이 5자를 초과할 때", async () => {
    // given
    const inputs = ["aaaaa"];

    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  // 이동 횟수 입력
  test("이동 횟수가 숫자가 아닐 때", async () => {
    // given
    const inputs = ["a,b", "a"];

    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("이동 횟수가 0일 때", async () => {
    // given
    const inputs = ["a,b", "0"];

    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  // 우승자 출력
  test("우승자가 여러명일 때", async () => {
    //given
    const MOVING_FORWARD = 4;
    const inputs = ["a,b", "1"];
    const outputs = ["a : -", "b : -", "최종 우승자 : a, b"];
    const randoms = [MOVING_FORWARD, MOVING_FORWARD];
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
});
