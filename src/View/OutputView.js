import { Console } from '@woowacourse/mission-utils';

export default class OutputView {
  constructor() {}

  printRoundResult(roundResult) {
    roundResult.forEach(({ name, position }) => {
      Console.print(`${name} : ${position}`);
    });
  }
}
