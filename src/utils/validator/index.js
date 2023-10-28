import { SYSTEM_TEXT } from '../../constants/System.js';
import { isDelimiter, isDuplication, isLanguageValid, isNameLength } from './utils/index.js';

const Validator = {
  checkRacingCarNames(carNames) {
    if (!isDelimiter(carNames)) {
      throw new Error(`[ERROR] 구분자는 ${SYSTEM_TEXT.delimiter}만 가능합니다.`);
    }
    if (!isNameLength(carNames)) throw new Error('[ERROR] 이름의 길이가 유효하지 않습니다.');
    if (!isLanguageValid(carNames)) throw new Error('[ERROR] 유효하지 않은 언어가 사용되었습니다.');
    if (isDuplication(carNames)) throw new Error('[ERROR] 중복되는 이름이 존재합니다.');
  },
};

export default Validator;
