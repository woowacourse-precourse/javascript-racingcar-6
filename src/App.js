import { Console } from '@woowacourse/mission-utils';
import { RESULT_STATUS } from './Constant.js';
import InputValue from './InputValue.js';
import RacingGame from './RacingGame.js';
import RaceResult from './RaceResult.js';

class App {
  async play() {
    const racingCar = await InputValue.carName();
    const moveCount = await InputValue.numberOfMoves();

    Console.print(RESULT_STATUS.enter);
    Console.print(RESULT_STATUS.progress);

    for (let i = 0; i < moveCount; i++) {
      RacingGame.moveCar(racingCar);
      RaceResult.progress(racingCar);
    }
  }
}

export default App;
