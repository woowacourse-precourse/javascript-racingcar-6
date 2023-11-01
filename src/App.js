import game from './game.js';
import gameResult from './gameResult.js';
import gameSetting from './gameSetting.js';

class App {
  async play() {
    const { racerMap, round } = await gameSetting();
    game(racerMap, round);
    gameResult(racerMap);
  }
}

export default App;
