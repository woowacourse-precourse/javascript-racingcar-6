import { SPACE_ERROR_MESSAGE } from "../constants/error-message.js";
import InputError from "./InputError.js";

const spacePattern = /\s/g;

/**
 * 입력받은 문자열에 공백이 존재하는지 검증하기 위한 함수
 * @param {string} inputString 문자열
 * @throw 문자열에 공백이 존재한다면 에러를 던진다.
 */
function checkSpace(inputString) {
  if (inputString.match(spacePattern)) {
    throw new InputError(SPACE_ERROR_MESSAGE);
  }
}

export default checkSpace;
