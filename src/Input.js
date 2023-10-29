import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from './Message';

class Input {
  nameArray = [];

  round = 0;

  async readText(isRound) {
    try {
      const text = await MissionUtils.Console.readLineAsync(MESSAGE.inputName);
      if (!isRound) {
        // 자동차 이름에 대한 input
        this.nameArray = text.split(',');
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
      const pass =
        name.length <= 5 && name.split('').every((i) => /[a-zA-Z]$/.test(i));
      if (!pass) throw new Error(MESSAGE.nameError);
    });
  }

  validateRound(text) {
    const pass = !Number.isNaN(Number(text));
    if (!pass) {
      throw new Error(MESSAGE.roundError);
    } else {
      this.round = Number(text);
    }
  }
}
export default Input;
