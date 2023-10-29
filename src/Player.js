import { Console, Random } from '@woowacourse/mission-utils'
import { INPUT_MESSAGE } from './Message.js'
import Validate from './Validate.js';

const check = new Validate();

class Player{
  
  async carName(){
    Console.print(INPUT_MESSAGE.INPUT_CARS_NAME);
    const PLAYER = this.inputPlayerName();

    return PLAYER
  }
  
  async inputPlayerName(){
    const INPUT_PLAYER = await Console.readLineAsync('');

    return check.validateName(INPUT_PLAYER);
  }

  async repeatTimes(){
    Console.print(INPUT_MESSAGE.INPUT_REPEAT)
    const REPEAT_TIMES = await Console.readLineAsync('')

    return check.validateNumber(REPEAT_TIMES)
  }

}

export default Player