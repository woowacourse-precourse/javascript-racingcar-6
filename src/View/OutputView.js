import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  printRoundResult(roundResult) {
    roundResult.forEach(({ name, position }) => {
      this.#onPrint(`${name} : ${'-'.repeat(position)}`);
    });
    OutputView.printPadding();
  }

  printWinners(winners) {
    this.#onPrint(`최종 우승자 : ${winners}`);
  }

  printGameStart() {
    OutputView.printPadding();
    this.#onPrint('실행 결과');
  }

  static printPadding() {
    Console.print(' ');
  }

  #onPrint(text) {
    Console.print(text);
  }
}
