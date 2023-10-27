import { MissionUtils } from '@woowacourse/mission-utils';

class Input {
  async input(message) {
    return await MissionUtils.Console.readLineAsync(message);
  }
}
export default Input;
