import { Console } from '@woowacourse/mission-utils';
import { message } from '../../Constants';

async function printFinalResult(finalWinner) {
  const namesOnly = finalWinner.map((item) => {
    const slicePoint = item.indexOf(' : ');
    return item.slice(0, slicePoint);
  });

  Console.print(`${message.FINAL_WINNER}${namesOnly.join(', ')}`);
}

export default printFinalResult;
