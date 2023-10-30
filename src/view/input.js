import { MissionUtils } from '@woowacourse/mission-utils';

// 폴더 변경
class Input {
  static async text(message) {
    const carName = await MissionUtils.Console.readLineAsync(message);
    return carName;
  }
}
export default Input;
