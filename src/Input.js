import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from './Message.js';

class Input {
  nameArray = [];

  async readText() {
    try {
      const text = await MissionUtils.Console.readLineAsync(MESSAGE.input);
      this.nameArray = text.split(',');
      this.validateName();
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
}
export default Input;
