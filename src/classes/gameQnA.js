import { Console } from '@woowacourse/mission-utils';
import { PROMPT_MESSAGE } from '../constant/message';

class GameQnA {
  static async carsName() {
    const answer = await Console.readLineAsync(PROMPT_MESSAGE.INPUT_CARS_NAME);
    return answer;
  }

  static async tryTime() {
    const answer = await Console.readLineAsync(PROMPT_MESSAGE.INPUT_TRY_TIME);
    return answer;
  }
}

export default GameQnA;
