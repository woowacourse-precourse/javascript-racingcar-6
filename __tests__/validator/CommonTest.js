import {
  ERROR_PREFIX,
  SPACE_ERROR_MESSAGE,
} from "../../src/constants/message/error";
import checkSpace from "../../src/validator/common";

describe("공통으로 사용되는 공백 체크 검증 함수를 확인", () => {
  test("공백이 포함되지 않은 문자열이 입력되는 경우 에러를 반환하지 않는다.", () => {
    const inputStrings = ["pobi", "jun", "kor"];

    inputStrings.forEach((inputString) =>
      expect(() => checkSpace(inputString)).not.toThrow()
    );
  });

  test("공백이 포함된 문자열이 입력되는 경우 에러를 반환한다.", () => {
    const inputStrings = [" ", " pobi", "pobi ", "po bi", " pobi ", " po bi "];

    inputStrings.forEach((inputString) =>
      expect(() => checkSpace(inputString)).toThrow(
        ERROR_PREFIX + SPACE_ERROR_MESSAGE
      )
    );
  });
});
