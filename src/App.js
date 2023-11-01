import { GameData } from './GameData.js';
import { askRaceInfo } from './askRaceInfo.js';
import { displayWinner } from './displayWinner.js';
import { runRace } from './runRace.js';

class App {
  async play() {
    const gameData = new GameData();
    await askRaceInfo(gameData);
    runRace(gameData);
    displayWinner(gameData);
  }
}

export default App;
