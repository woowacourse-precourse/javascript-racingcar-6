import { Console } from '@woowacourse/mission-utils';

class View {
  static ADVANCE_CHAR = '-';

  printAdvanceResult(models) {
    models?.forEach(({ name, moveCnt }) => {
      Console.print(`${name} : ${View.ADVANCE_CHAR.repeat(moveCnt)}`);
    });
  }
}

export default View;
