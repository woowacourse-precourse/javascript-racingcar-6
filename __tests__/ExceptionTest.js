import App from "../src/App.js";
import { ERROR_MESSAGE } from "../src/constants/message.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("이름 예외 테스트", () => {
  test("이름이 빈값일 때 예외 처리", async () => {
    mockQuestions([""]);

    const app = new App();

    await expect(app.play()).rejects.toThrow(ERROR_MESSAGE.NO_INPUT);
  });

  test("한명일 때 예외 처리", async () => {
    mockQuestions(["pobi"]);

    const app = new App();

    await expect(app.play()).rejects.toThrow(ERROR_MESSAGE.TOO_FEW_NAME);
  });

  test("10명 이상일 때 예외 처리", async () => {
    const input = ["a,b,c,d,e,f,g,h,i,j,k"];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).rejects.toThrow(ERROR_MESSAGE.TOO_MANY_NAMES(10));
  });
  test("이름 마지막에 ,가 포함되었을 때 정상 작동", async () => {
    const input = ["a,b,", "10"];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).resolves.not.toThrow();
  });

  test.each([[["pobi,javaji"]], [["pobi,eastjun"]]])(
    "이름 길이에 대한 예외 처리",
    async (inputs) => {
      mockQuestions(inputs);

      const app = new App();

      await expect(app.play()).rejects.toThrow(
        ERROR_MESSAGE.INVALID_NAME_LENGTH,
      );
    },
  );

  test.each([[["pobi,pobi"]], [["pobi,rin,pobi,jun"]]])(
    "이름 중복에 대한 예외 처리",
    async (inputs) => {
      mockQuestions(inputs);

      const app = new App();

      await expect(app.play()).rejects.toThrow(ERROR_MESSAGE.HAVE_SAME_NAME);
    },
  );
});

describe("라운드 예외 테스트", () => {
  test("라운드 입력하지 않았을 때 예외 처리", async () => {
    mockQuestions(["pobi,rin", ""]);

    const app = new App();

    await expect(app.play()).rejects.toThrow(ERROR_MESSAGE.NO_INPUT);
  });

  test("라운드가 max 초과일 때 예외 처리", async () => {
    const inputs = ["pobi, jun", "31"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow(ERROR_MESSAGE.TOO_MANY_ROUND(30));
  });

  test.each([["0"], ["seven"], ["a1"], ["2.3"]])(
    "라운드가 숫자가 아닐 떄",
    async (input) => {
      mockQuestions(["pobi,rin", input]);

      const app = new App();

      await expect(app.play()).rejects.toThrow(
        ERROR_MESSAGE.INVALID_ROUND_RANGE,
      );
    },
  );
});
