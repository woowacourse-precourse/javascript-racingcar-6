import { getCarName, getPlayNumber } from './Util/inputData.js';

import playGame from './playGame.js';
import printWinner from './View/printWinner.js';

class App {
  async play() {
    const carName = new Map();
    await getCarName().forEach((name) => carName.set(name, ''));
    const playNumber = await getPlayNumber();
    await playGame(playNumber, carName);
    printWinner(carName);
  }
}

export default App;
