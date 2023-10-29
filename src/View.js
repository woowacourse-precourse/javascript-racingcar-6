import { Console } from '@woowacourse/mission-utils';

class View {
  static ADVANCE_CHAR = '-';

  printAdvanceResult(models) {
    models?.forEach((model) => {
      Console.print(this.formatResult(model));
    });
  }

  formatResult({ name, moveCnt }) {
    return `${name} : ${this.generateAdvanceString(moveCnt)}`;
  }

  generateAdvanceString(moveCnt) {
    return View.ADVANCE_CHAR.repeat(moveCnt);
  }
}

export default View;
