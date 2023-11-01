import { ERROR } from "../../src/constants/constants";
import { InputValidator } from "../../src/view";

describe("입력값 검증", () => {
  test("자동차 이름 성공적으로 입력하기", async () => {
    // given
    const inputValidator = new InputValidator();
    const input = "고양이,콩순이,뽀야미";
    // when
    // then
    inputValidator.validateCarNamesInput(input);
  });
  test("자동차 이름에 공백이 있으면 에러 발생", async () => {
    // given
    const inputValidator = new InputValidator();
    const input = "고양이 , 콩순이 , 뽀야미";

    try {
      // when
      inputValidator.validateCarNamesInput(input);
      // then
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe("[ERROR] 공백 없이 입력해야합니다.");
    }
  });

  test("자동차 입력시 콤마로 시작하면 에러 발생", async () => {
    // given
    const inputValidator = new InputValidator();
    const input = ",콩순이 ,뽀야미";

    try {
      // when
      inputValidator.validateCarNamesInput(input);
      // then
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe("[ERROR] 공백 없이 입력해야합니다.");
    }
  });

  test("시도 횟수가 숫자가 아닐 때", async () => {
    // given
    const inputValidator = new InputValidator();
    const input = "두번";

    try {
      // when
      inputValidator.validateAttemptCountInput(input);
      // then
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe(ERROR.NUMBER_ONLY_ERROR);
    }
  });

  test("시도 횟수가 1아래로 입력될때", async () => {
    // given
    const inputValidator = new InputValidator();
    const input = "0";

    try {
      // when
      inputValidator.validateAttemptCountInput(input);
      // then
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe("[ERROR] 시도 횟수는 1 이상으로 입력하세요.");
    }
  });
});
