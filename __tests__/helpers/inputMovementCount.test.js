import { InputError } from "../../src/errors";
import inputMovementCount, {
  ERROR_MESSAGES,
} from "../../src/helpers/inputMovementCount";
import { mockQuestions } from "../../test-utils";

describe("이동 횟수 입력 예외 테스트", () => {
  test.each([[["0"]], [["1a3"]], [["1 2"]]])(
    "%#. 1 이상의 숫자가 아닌 입력",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when & then
      await expect(inputMovementCount()).rejects.toThrow(
        new InputError(ERROR_MESSAGES.NOT_POSITIVE_INTEGER)
      );
    }
  );
});
