/* eslint-disable class-methods-use-this */
import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/message';

class OutputView {
  printGameStart(){
    Console.print(OUTPUT_MESSAGE.START);
  }
}

export default OutputView;