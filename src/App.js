import {Console, Random} from '@woowacourse/mission-utils';
import {GAME_MESSAGE} from './Message';

class App {
  async play() {  
    const winner = this.carRacingGame();

  }

  async carRacingGame() {
    this.carNames = await Console.readLineAsync(GAME_MESSAGE.INPUT_CAR_NAME);
    const tryNumber = await Console.readLineAsync(GAME_MESSAGE.INPUT_TRY_NUMBER);


  }

}

export default App;
