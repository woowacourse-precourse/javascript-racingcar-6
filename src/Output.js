import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from './Message';

class Output {
  printMessage(message) {
    MissionUtils.Console.print(message);
  }

  printPlayResult({ name, movement }) {
    this.printMessage(`${name} : ${movement.join('')}`);
  }
}

export default Output;
