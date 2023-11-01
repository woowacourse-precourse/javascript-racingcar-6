import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/message';

class InputView {
  async readPlayerCars(){
    const input = await Console.readLineAsync(INPUT_MESSAGE.PLAYER_CARS);
    return input;
  }

  async readMoveCounts(){
    const input = await Console.readLineAsync(INPUT_MESSAGE.MOVE_COUNTS);
    return input;
  }
}

export default InputView;