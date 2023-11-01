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

describe("[CUSTOM] 입력받은 자동차들에 대한 예외 처리", () => {
  test("비어있는 문자열", async () => {
    // given
    const inputs = [""]; // 비어있는 문자열을 포함하는 배열
    mockQuestions(inputs);

    // when
    const app = new App();
    const playPromise = app.play();

    // then
    await expect(playPromise).rejects.toThrow("[ERROR]");
  });
  test.each([[["one,two,endgame"]], [["this,is,sparta"]]])(
    "문자열 길이 예외",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();
      const playPromise = app.play();

      // then
      await expect(playPromise).rejects.toThrow("[ERROR]");
    }
  );
  test.each([[["skdf  ,fdjsk,owi l"]], [["sp         ace"]]])(
    "공백에 대한 예외",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();
      const playPromise = app.play();

      // then
      await expect(playPromise).rejects.toThrow("[ERROR]");
    }
  );
  test.each([[["abc, abc"]], [["abc,abc "]], [["abc, abc"]], [["abc,a b c"]]])(
    "중복에 대한 예외",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();
      const playPromise = app.play();

      // then
      await expect(playPromise).rejects.toThrow("[ERROR]");
    }
  );
});
