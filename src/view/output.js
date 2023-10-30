import { MissionUtils } from '@woowacourse/mission-utils';

// 폴더 변경
class Output {
  static text(message) {
    return MissionUtils.Console.print(message);
  }
}
export default Output;
