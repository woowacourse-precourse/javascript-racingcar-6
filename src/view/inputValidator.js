import { ERROR } from "../constants/constants";

// @ts-check
export class InputValidator {
  /**
   *
   * @param {string} input - 사용자 입력 값
   * @throws {Error} - 검증 실패시 에러
   * @description 자동차 이름을 검증하는 함수
   * @returns {void}
   */
  validateCarNamesInput(input) {
    // // null값이거나 빈칸이 들어간 경우
    // if (input == null || input.includes(" ")) {
    //   throw new Error(ERROR.BLANK_ERROR);
    // }
    // //쉼표로 시작하거나 끝난 경우
    // if (input.charAt(0) === "," || input.charAt(input.length - 1) === ",") {
    //   throw new Error(ERROR.COMMA_ERROR);
    // }
    if (!/^(\w+,)+\w+$/.test(input)) {
      throw new Error("[ERROR] 에러에러"); // 유효하지 않은 차이름 오류 타입 생성
    }
  }

  /**
   *
   * @param {string} input - 사용자 입력 값
   * @throws {Error} - 검증 실패시 에러
   * @description 레이스 경주 횟수를 검증하는 함수
   * @returns {void}
   */

  validateAttemptCountInput(input) {
    // //숫자가 아닌 경우
    // if (isNaN(Number(input))) throw new Error(ERROR.NUMBER_ONLY_ERROR);
    // // 0보다 작은 경우 (0회 가능하게 일단 만듦)
    // if (Number(input) < 0) throw new Error(ERROR.NAME_RANGE_ERROR);
    if (!/^\d+$/.test(input)) {
      throw new Error(ERROR.NUMBER_ONLY_ERROR);
    }
    if (input < 0) throw new Error(ERROR.NAME_RANGE_ERROR);
  }
}
