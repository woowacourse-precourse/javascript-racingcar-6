import game from './game.js';
import gameSetting from './gameSetting.js';

class App {
  async play() {
    const { racerMap, round } = await gameSetting();
    game(racerMap, round);
  }
}

export default App;
