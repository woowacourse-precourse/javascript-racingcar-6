import { MissionUtils } from '@woowacourse/mission-utils';

class Output {
  text(message) {
    return MissionUtils.Console.print(message);
  }
}
export default Output;
