import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/messages';

class OutputView {
  printAdvanceResult(models) {
    models?.forEach((model) => {
      Console.print(this.formatResult(model));
    });
  }

  formatResult({ name, moveCnt }) {
    return `${name} : ${this.generateAdvanceString(moveCnt)}`;
  }

  generateAdvanceString(moveCnt) {
    return MESSAGES.moveForward.repeat(moveCnt);
  }
}

export default OutputView;
