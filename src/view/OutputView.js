/* eslint-disable class-methods-use-this */
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
}

export default OutputView;