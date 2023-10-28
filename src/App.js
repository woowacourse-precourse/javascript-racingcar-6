import { getCarName, getPlayNumber } from './Util/gameData.js';

import playGame from './playGame.js';
import printWinner from './View/printWinner.js';

class App {
  async play() {
    let carName = new Map();
    await getCarName(carName);
    let playNumber = await getPlayNumber();
    await playGame(playNumber, carName);
    printWinner(carName);
  }
}

export default App;
