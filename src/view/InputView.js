import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/message';

class InputView {
  // eslint-disable-next-line class-methods-use-this
  async readPlayerCars(){
    const input = await Console.readLineAsync(INPUT_MESSAGE.PLAYER_CARS);
    return input;
  }
}

export default InputView;