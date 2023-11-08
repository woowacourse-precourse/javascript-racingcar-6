import { MissionUtils } from '@woowacourse/mission-utils';
import { RULE, MESSAGE } from './constant';

class Input {
  nameArray = [];

  round = 0;

  async readText(isRound) {
    try {
      const text = await MissionUtils.Console.readLineAsync(MESSAGE.inputName);
      if (!isRound) {
        // 자동차 이름에 대한 input
        this.isDelimiter(text);
        this.nameArray = text.split(RULE.delimiter);
        this.validateName();
      } else {
        // 게임 총 횟수에 대한 input
        this.validateRound(text);
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  isDelimiter(text) {
    if (!text.includes(RULE.delimiter)) throw new Error(MESSAGE.delimiterError);
  }
  validateName() {
    this.nameArray.forEach((name) => {
      const isUndefined = !!name.replaceAll(' ', '');
      const isCorrectLength =
        RULE.name.min <= name.length && name.length <= RULE.name.max;
      const pass =
        isCorrectLength &&
        !isUndefined &&
        name.split('').every((i) => /.*/.test(i));
      if (!pass) throw new Error(MESSAGE.nameError);
    });
  }

  validateRound(text) {
    const isUndefined = text !== '0' && !!!text;
    const round = Number(text);
    const pass = !isUndefined && !Number.isNaN(round) && round >= 0;
    if (!pass) {
      throw new Error(MESSAGE.roundError);
    } else {
      this.round = Number(text);
    }
  }
}
export default Input;
