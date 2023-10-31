import { mockQuestions } from "../src/testUtils/testUtil.js";
import App from "../src/App.js";

describe("NamesValidationTest", () => {
  test("이름이 빈값일 때 예외 처리", async () => {
    mockQuestions([""]);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      "[ERROR]아무것도 입력하지 않았습니다.",
    );
  });

  test("한명일 때 예외 처리", async () => {
    mockQuestions(["pobi"]);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      "[ERROR]2개 이상으로 입력해주세요.",
    );
  });

  test("10명 이상일 때 예외 처리", async () => {
    const input = ["a,b,c,d,e,f,g,h,i,j,k"];
    mockQuestions(input);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      "[ERROR]10개 이하로 입력해주세요.",
    );
  });
  test("이름 마지막에 ,가 포함되었을 때 예외 처리", async () => {
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
        "[ERROR]이름은 5자 이내여야 합니다.",
      );
    },
  );

  test.each([[["pobi,pobi"]], [["pobi,rin,pobi,jun"]]])(
    "이름 중복에 대한 예외 처리",
    async (inputs) => {
      mockQuestions(inputs);

      const app = new App();

      await expect(app.play()).rejects.toThrow(
        "[ERROR]중복되는 이름이 있습니다.",
      );
    },
  );
});

describe("RoundValidationTest", () => {
  test("횟수 입력하지 않았을 때 예외 처리", async () => {
    mockQuestions(["pobi,rin", ""]);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      "[ERROR]아무것도 입력하지 않았습니다.",
    );
  });

  test("횟수 30 초과일 때 에러 처리", async () => {
    const inputs = ["pobi, jun", "31"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow(
      "[ERROR]30이하의 수를 입력해주세요.",
    );
  });

  test.each([["0"], ["seven"], ["a1"], ["2.3"]])(
    "횟수에 대한 예외 처리",
    async (input) => {
      mockQuestions(["pobi,rin", input]);

      const app = new App();

      await expect(app.play()).rejects.toThrow(
        "[ERROR]1이상의 정수를 입력해 주세요.",
      );
    },
  );
});
