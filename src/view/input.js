import { MissionUtils } from '@woowacourse/mission-utils';

class Input {
  static async text(message) {
    return await MissionUtils.Console.readLineAsync(message);
  }
}
export default Input;
