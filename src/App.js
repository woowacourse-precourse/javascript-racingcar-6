import { GameData } from './GameData.js';
import { gameStart } from './gameStart.js';

class App {
  async play() {
    const gameData = new GameData();
    await gameStart(gameData);
  }
}

export default App;
