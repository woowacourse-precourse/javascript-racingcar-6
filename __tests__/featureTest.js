import InputView from "../src/view/InputView.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("기능1 - 경주 참여 자동차 이름 받기", () => {
  test("자동차 이름 입력값 구분 테스트", async () => {
    const inputs = "pobi,woni,jun";
    const outputs = ["pobi", "woni", "jun"];

    mockQuestions([inputs]);

    const result = await InputView.readUserRaceCarName();

    await expect(result).toEqual(outputs);
  });

  test("구분자가 포함되지 않은 경우 값을 그대로 반환", async () => {
    const inputs = ["pobi"];
    const outputs = ["pobi"];

    mockQuestions(inputs);

    const result = await InputView.readUserRaceCarName();

    await expect(result).toEqual(outputs);
  });

  test("각 자동차 이름 앞, 뒤에 공백이 있는 경우 제거 후 반환", async () => {
    const inputs = ["pobi,  woni,jun  "];
    const outputs = ["pobi", "woni", "jun"];

    mockQuestions(inputs);

    const result = await InputView.readUserRaceCarName();

    await expect(result).toEqual(outputs);
  });

  test.each([[["pobi,wo  ni"]], [["p    i,woni"]]])(
    "자동차 이름이 5자를 초과해 입력된 경우 ERROR 반환(이름 문자열 내 공백도 자수에 포함)",
    async (inputs) => {
      mockQuestions(inputs);

      await expect(InputView.readUserRaceCarName()).rejects.toThrow("[ERROR]");
    },
  );
});
