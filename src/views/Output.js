import { MissionUtils } from '@woowacourse/mission-utils';

const Output = {
  printExecution() {
    MissionUtils.Console.print(Output.EXECUTION);
  },
  printExecutionResult(name, forward) {
    const forwardString = '-'.repeat(forward);
    MissionUtils.Console.print(`${name} : ${forwardString}`);
  },
  printWinner(winners) {
    const winnersString = winners.join(', ');
    MissionUtils.Console.print(`${Output.WINNER} : ${winnersString}`);
  },
};
export default Output;
