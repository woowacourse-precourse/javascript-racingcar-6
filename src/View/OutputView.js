import { Console } from "@woowacourse/mission-utils";

const EXECUTION_MESSAGE = '\n실행 결과';
const END_OF_ROUND_MESSAGE = '';
const WINNER_MESSAGE = '최종 우승자 : ';
const COMMA_TO_SEPERATE_NAMES = ', ';

const OutputView = {

  print(message) {
    Console.print(message);
  },

  printExecutionMessage() {
    this.print(EXECUTION_MESSAGE);
  },

  printEndOfRound() {
    this.print(END_OF_ROUND_MESSAGE);
  },

  printWinners(winners) {
    this.print(`${WINNER_MESSAGE}${winners.join(COMMA_TO_SEPERATE_NAMES)}`);
  },
}

export default OutputView;