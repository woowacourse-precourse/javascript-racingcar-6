import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("자동차 이름 입력 메소드 테스트", () => {
  test("쉼표로 구분된 자동차 이름 입력 테스트", async () => {
    const inputs = ["pobi,woni,jun"];

    mockQuestions(inputs);

    const result = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );

    expect(result).toEqual("pobi,woni,jun");
  });

  test("배열 반환 테스트", async () => {
    const inputs = ["pobi,woni,jun"];
    const outputArray = ["pobi", "woni", "jun"];

    mockQuestions(inputs);

    const result = await App.inputCarName();

    expect(result).toStrictEqual(outputArray);
  });

  test("자동차 한 대 테스트", async () => {
    const inputs = ["pobi"];
    const outputArray = ["pobi"];

    mockQuestions(inputs);

    const result = await App.inputCarName();

    expect(result).toStrictEqual(outputArray);
  });

  test("자동차 8대 테스트", async () => {
    const inputs = ["pobi,woni,jun,one,two,three,four,five"];
    const outputArray = [
      "pobi",
      "woni",
      "jun",
      "one",
      "two",
      "three",
      "four",
      "five",
    ];

    mockQuestions(inputs);

    const result = await App.inputCarName();

    expect(result).toStrictEqual(outputArray);
  });

  test.each([[["pobi,longname"]], [["longname"]], [["pobi,,name"]]])(
    "자동차 이름이 빈 값이거나 5자를 초과하면 예외를 반환한다.",
    async (inputs) => {
      mockQuestions(inputs);

      await expect(App.inputCarName()).rejects.toThrow("[ERROR]");
    }
  );
});
