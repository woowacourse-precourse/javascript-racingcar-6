import App from "../src/App.js";
import { mockQuestions, mockRandoms, getLogSpy } from "../test-utils.js";

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
    // 잘못된 인풋
    [[""]],
    [[","]],
    [[",pobi"]],
    [["pobi,"]],
    // 이름 사이에 잘못된 이름이 들어갔을 경우
    [["pobi,,hobin"]],
    // 5자를 넘어가는 이름이 있을 경우
    [["pobi,javaji"]],
    [["pobi,eastjun"]],
  ])("이름에 대한 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test.each([
    // 1 미만의 시도 횟수
    [[0]],
    [[-1]],
    // 숫자가 아닌 string
    [["abc"]],
    // 소수점이 있는 실수를 입력
    [[0.1]],
    [[1.1]]
  ])("시도할 횟수에 대한 예외처리", async (inputs) => {
    // given
    mockQuestions(["pobi,hobin", ...inputs]);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("경기중 스냅샷 테스트", async () => {
    // given
    const POBI_MOVING_FORWARD = 4;
    const WONI_MOVING_FORWARD = 4; 
    const WONI_STOP = 3;
    const inputs = ["pobi,woni", "2"];
    const outputs = ["실행 결과", "pobi : -\nwoni : -\n", "pobi : --\nwoni : -\n"];
    const randoms = [
      POBI_MOVING_FORWARD, 
      WONI_MOVING_FORWARD, 
      POBI_MOVING_FORWARD, 
      WONI_STOP
    ];
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

  test("최종 우승자 출력 테스트", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const outputs = ["최종 우승자 : pobi"];
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

  test("공동 우승자 출력 테스트", async () => {
    // given
    const MOVING_FORWARD = 4;
    const inputs = ["pobi,woni", "1"];
    const outputs = ["최종 우승자 : pobi, woni"];
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
