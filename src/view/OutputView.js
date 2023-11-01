import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/message';

class OutputView {
  printGameStart(){
    Console.print(OUTPUT_MESSAGE.START);
  }

  printGameResult(player, result){
    Console.print(player + OUTPUT_MESSAGE.RESULT + result);
  }

  printWinner(winner){
    Console.print(OUTPUT_MESSAGE.WINNER + winner);
  }

  printLineBreak(){
    Console.print('\n');
  }
}

export default OutputView;