import App from "../src/App.js";
import * as gameStart from "../src/gameStart.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("게임 시작", () => {
  test("게임 시작 시 입력은 두 번 받는다.", async () => {
    // given
    const inputs = ["cho,yoon", "3"];
    mockQuestions(inputs);

    // when
    const app = new App();
    await app.play();

    // then
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledTimes(2);
  });

  test("자동차 이름 입력 요구 문구 출력한다.", async () => {
    MissionUtils.Console.print = jest.fn();
    // given
    const inputs = ["pobi,woni", "3"];
    const startSentence =
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)";

    mockQuestions(inputs);

    // when
    await gameStart.getCarName();

    // then
    expect(MissionUtils.Console.print).toHaveBeenCalledWith(
      expect.stringContaining(startSentence)
    );
  });

  test.each([["cho"], [""], ["yunbeen"]])(
    "잘못된 자동차 이름을 입력 받는 경우 오류를 던진다.",
    async (input) => {
      // then
      expect(() => gameStart.nameValidation(input)).toThrow("[ERROR]");
    }
  );

  test("검증이 끝난 자동차 이름을 받아서 게임 진행을 위한 초기 세팅을 한다.", async () => {
    // given
    const inputs = ["cho,yoon"];
    mockQuestions(inputs);

    // when
    const result = await gameStart.getCarName();

    // then
    expect(result).toStrictEqual([
      { name: "cho", random: 0, move: "" },
      { name: "yoon", random: 0, move: "" },
    ]);
  });

  test.each([[""], ["ten"], ["-1"]])(
    "잘못된 시도 횟수를 입력 받는 경우 오류를 던진다.",
    async (input) => {
      // then
      expect(() => gameStart.numValidation(input)).toThrow("[ERROR]");
    }
  );
});
