/* eslint class-methods-use-this: "off" */
import { startGame } from './Domain/RacingGame';

class App {
  async play() {
    await startGame();
  }
}

export default App;
