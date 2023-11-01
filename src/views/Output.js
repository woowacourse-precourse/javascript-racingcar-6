import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/Message';

const Output = {
  printExecution() {
    MissionUtils.Console.print(MESSAGE.EXECUTION);
  },
  printExecutionResult(name, forward) {
    const forwardString = '-'.repeat(forward);
    MissionUtils.Console.print(`${name} : ${forwardString}`);
  },
  printWinner(winners) {
    const winnersString = winners.join(', ');
    MissionUtils.Console.print(`${MESSAGE.WINNER} : ${winnersString}`);
  },
};
export default Output;
