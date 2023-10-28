import { MissionUtils } from '@woowacourse/mission-utils';

// 폴더 변경
class Input {
  static async text(message) {
    return await MissionUtils.Console.readLineAsync(message);
  }
}
export default Input;
