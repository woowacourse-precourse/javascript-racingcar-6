import { getCarName, getPlayNumber } from './gameData.js';

import playGame from './playGame.js';
import printWinner from './printWinner.js';

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
