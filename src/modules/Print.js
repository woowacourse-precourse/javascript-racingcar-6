import { Console } from '@woowacourse/mission-utils';

const BEFORE_RACING_MESSAGE = '실행 결과';

class Print {
  static beforeRacingMessage() {
    Console.print(this.BEFORE_RACING_MESSAGE);
  }
}

export default Print;
