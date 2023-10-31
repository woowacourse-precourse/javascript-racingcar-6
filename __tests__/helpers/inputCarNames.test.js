import { InputError } from "../../src/errors";
import inputCarNames, { ERROR_MESSAGES } from "../../src/helpers/inputCarNames";
import { mockQuestions } from "../../test-utils";

describe("자동차 이름 입력 예외 테스트", () => {
  test("빈 값", async () => {
    // given
    const inputs = [""];

    mockQuestions(inputs);

    // when & then
    await expect(inputCarNames()).rejects.toThrow(
      new InputError(ERROR_MESSAGES.EMPTY_INPUT)
    );
  });

  test.each([[[" "]], [["lucas, pobi"]], [["lucas "]]])(
    "%#. 공백 포함",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when & then
      await expect(inputCarNames()).rejects.toThrow(
        new InputError(ERROR_MESSAGES.CONTAINS_WHITE_SPACE)
      );
    }
  );

  test("연속한 쉼표(,) 포함", async () => {
    // given
    const inputs = ["lucas,,pobi"];

    mockQuestions(inputs);

    // when & then
    await expect(inputCarNames()).rejects.toThrow(
      new InputError(ERROR_MESSAGES.CONSECUTIVE_COMMAS)
    );
  });

  test.each([[[","]], [[",lucas,pobi"]], [["lucas,pobi,"]]])(
    "%#. 시작 혹은 끝에 쉼표(,) 포함",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when & then
      await expect(inputCarNames()).rejects.toThrow(
        new InputError(ERROR_MESSAGES.COMMA_AT_START_OR_END)
      );
    }
  );

  test.each([
    [["lucaseunchae"]],
    [["lucas,pobiispobi"]],
    [["lucaseunchae,pobijigi"]],
  ])("%#. 자동차 이름 5자 초과", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when & then
    await expect(inputCarNames()).rejects.toThrow(
      new InputError(ERROR_MESSAGES.SOME_STRING_OVER_FIVE)
    );
  });

  test("자동차 이름 중복", async () => {
    // given
    const inputs = ["lucas,pobi,lucas"];

    mockQuestions(inputs);

    // when & then
    await expect(inputCarNames()).rejects.toThrow(
      new InputError(ERROR_MESSAGES.DUPLICATE_NAMES)
    );
  });
});
