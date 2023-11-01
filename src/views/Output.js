import { MissionUtils } from '@woowacourse/mission-utils';

const Output = {
  printExecution() {
    MissionUtils.Console.print(Output.EXECUTION);
  },
  printExecutionResult(name, forward) {
    const forwardString = '-'.repeat(forward);
    MissionUtils.Console.print(`${name} : ${forwardString}`);
  },
};
export default Output;
