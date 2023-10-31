import { mockQuestions } from "../../src/utils/testUtils";
import numberHandler from "../../src/handler/numberHandler";

const ERROR_MESSAGES = {
  MUST_NUMBER: "[ERROR] 시도 횟수는 숫자 값만 입력해주세요.",
  NOT_BLANK: "[ERROR] 시도 횟수를 입력하지 않으셨습니다.",
  MUST_OVER_1: "[ERROR] 시도 횟수는 1 이상이어야 합니다.",
  MUST_UNDER_100: "[ERROR] 시도 횟수는 100 미만이어야 합니다.",
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
  const ERROR_CASES = [
    [["1e"], ERROR_MESSAGES.MUST_NUMBER],
    [["1234q"], ERROR_MESSAGES.MUST_NUMBER],
    [[""], ERROR_MESSAGES.NOT_BLANK],
    [["   "], ERROR_MESSAGES.NOT_BLANK],
    [["0"], ERROR_MESSAGES.MUST_OVER_1],
    [["-1"], ERROR_MESSAGES.MUST_OVER_1],
    [["100"], ERROR_MESSAGES.MUST_UNDER_100],
    [["10000"], ERROR_MESSAGES.MUST_UNDER_100],
  ];
  test.each(ERROR_CASES)(
    "readTryNumber 에러 테스트",
    async (answer, message) => {
      await numberHandlerTestFn({
        answer,
        message,
      });
    }
  );

  const PASS_CASES = [
    [["5"], 5],
    [["99"], 99],
    [["50"], 50],
  ];
  test.each(PASS_CASES)(
    "readTryNumber 통과 테스트",
    async (answer, valueExpected, type = "pass") => {
      await numberHandlerTestFn({
        answer,
        type,
        valueExpected,
      });
    }
  );
});
