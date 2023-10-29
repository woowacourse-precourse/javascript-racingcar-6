import { mockQuestions, mockRandoms, getLogSpy } from "./ApplicationTest.js";
import App from "../src/App.js";
import { isMove } from "../src/util/Random.js";

describe("랜덤", () => {

  test("4이상 시 true 반환", async () => {
    mockRandoms([4]);
    const move = await isMove();

    expect(move).toEqual(true);
  });

  test("3이하 시 false 반환", async () => {
    mockRandoms([3]);
    const move = await isMove();

    expect(move).toEqual(false);
  });

  test("4이상 시 앞으로 이동 테스트", async () => {
    const random = [1, 5, 4, 3];
    const input = ["stop,go", "2"];
    const outputs = ["go : -", "", "go : -", "stop : -"];
    const logSpy = getLogSpy();

    mockQuestions(input);
    mockRandoms([...random]);

    const app = new App();
    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
