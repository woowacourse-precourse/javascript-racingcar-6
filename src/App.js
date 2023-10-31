import { getCarName, getPlayNumber } from './Util/inputData.js';

import playGame from './playGame.js';
import winner from './winner.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    const carName = await getCarName();
    const playNumber = await getPlayNumber();
    await playGame(playNumber, carName);
    Console.print(winner(carName));
  }
}

export default App;
