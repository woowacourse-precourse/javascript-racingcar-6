import { SYSTEM_TEXT } from '../../constants/System.js';
import { isDelimiter, isNameLength } from './utils/index.js';

const Validator = {
  checkRacingCarNames(carNames) {
    if (isDelimiter(carNames)) {
      throw new Error(`[ERROR] 구분자는 ${SYSTEM_TEXT}만 가능합니다.`);
    }
    if (isNameLength(carNames)) throw new Error('[ERROR] 이름의 길이가 유효하지 않습니다.');
  },
};

export default Validator;
