import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  constructor() {}

  printRoundResult(roundResult) {
    roundResult.forEach(({ name, position }) => {
      this.#onPrint(`${name} : ${position}`);
    });
  }

  #onPrint(text) {
    Console.print(text);
  }
}
