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

  validateName() {
    this.nameArray.forEach((name) => {
      const isCorrectLength =
        RULE.name.min < name.length && name.length <= RULE.name.max;
      const pass = isCorrectLength && name.split('').every((i) => /.*/.test(i));
      if (!pass) throw new Error(MESSAGE.nameError);
    });
  }

  validateRound(text) {
    const pass = !Number.isNaN(Number(text)) && Number(text) >= 0;
    if (!pass) {
      throw new Error(MESSAGE.roundError);
    } else {
      this.round = Number(text);
    }
  }
}
export default Input;
