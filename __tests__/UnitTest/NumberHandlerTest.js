import { mockQuestions } from "../../src/utils/testUtils";
import numberHandler from "../../src/handler/numberHandler";

const ERROR_MESSAGES = {
  ONLY_NUMBER: "[ERROR] 시도 횟수는 숫자 값만 입력해주세요.",
  NOT_BLANK: "[ERROR] 시도 횟수를 입력하지 않으셨습니다.",
};

async function numberHandlerTestFn({
  answer,
  message,
  type = "error",
  valueExpected,
}) {
  mockQuestions(answer);
  if (type === "error")
    await expect(numberHandler.readTryNumber()).rejects.toThrow(message);
  if (type === "pass") {
    const OUTPUT = await numberHandler.readTryNumber();
    expect(OUTPUT).toEqual(valueExpected);
  }
}

describe("NumberHandler 테스트", () => {
  test("readTryNumber 에러1", async () => {
    await numberHandlerTestFn({
      answer: ["1e"],
      message: ERROR_MESSAGES.ONLY_NUMBER,
    });
  });

  test("readTryNumber 에러2", async () => {
    await numberHandlerTestFn({
      answer: ["1234q"],
      message: ERROR_MESSAGES.ONLY_NUMBER,
    });
  });

  test("readTryNumber 에러3", async () => {
    await numberHandlerTestFn({
      answer: [""],
      message: ERROR_MESSAGES.NOT_BLANK,
    });
  });

  test("readTryNumber 통과", async () => {
    await numberHandlerTestFn({
      answer: ["5"],
      type: "pass",
      valueExpected: 5,
    });
  });

  test("readTryNumber 통과2", async () => {
    await numberHandlerTestFn({
      answer: ["99"],
      type: "pass",
      valueExpected: 99,
    });
  });
});
