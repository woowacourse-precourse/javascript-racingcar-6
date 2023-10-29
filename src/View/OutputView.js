import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  constructor() {}

  printRoundResult(roundResult) {
    roundResult.forEach(({ name, position }) => {
      this.#onPrint(`${name} : ${position}`);
    });
    OutputView.printPadding();
  }

  static printPadding() {
    Console.print('');
  }

  #onPrint(text) {
    Console.print(text);
  }
}
