import { getCarName, getPlayNumber } from './Util/inputData.js';

import playGame from './playGame.js';
import printWinner from './View/printWinner.js';

class App {
  async play() {
    const carName = await getCarName();
    const playNumber = await getPlayNumber();
    await playGame(playNumber, carName);
    printWinner(carName);
  }
}

export default App;
