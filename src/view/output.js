import { MissionUtils } from '@woowacourse/mission-utils';

class Output {
  static text(message) {
    return MissionUtils.Console.print(message);
  }
}
export default Output;
