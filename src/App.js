import { consoleResult } from './utils.js';
import { startGame } from './gameExport.js';

class App {
  async play() {
    try {
      await startGame();
    } catch (error) {
      throw new Error('[ERROR] 게임 실행 중 오류 발생:', error);
    }
  }
}

export default App;
