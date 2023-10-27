import { ERROR_MESSAGES } from '../constants/messages.js';
import REGEXS from '../constants/regexs.js';
import OPTIONS from '../constants/options.js';

class InputValidator {
  /**
   * 자동차 이름 입력에 대한 유효성 체크
   * @param {string[]} carNames
   */
  static carNames(carNames) {
    const { exceedName, emptyName, specialChar, duplicatedName } =
      ERROR_MESSAGES;
    const { rSpecialChar } = REGEXS;
    const { maxNaming } = OPTIONS;

    carNames.forEach((name, index) => {
      if (index > 2) throw new Error(exceedName);
      if (name.length > maxNaming) throw new Error(exceedName);
      if (!name.length) throw new Error(emptyName);
      if (rSpecialChar.test(name)) throw new Error(specialChar);
      if (index !== carNames.indexOf(name)) throw new Error(duplicatedName);
    });
  }

  /**
   * 자동차 이름 입력에 대한 유효성 체크
   * @param {number} laps
   */
  static laps(laps) {
    const { positive, integer } = ERROR_MESSAGES;
    const { rWhiteSpace } = REGEXS;

    if (rWhiteSpace.test(laps)) throw new Error('에러');
    if (parseInt(laps, 10) < OPTIONS.minLaps) throw new Error(positive);
    if (Number.isNaN(parseInt(laps, 10))) throw new Error(integer);
  }
}

export default InputValidator;
