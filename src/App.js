import { consoleResult } from './utils.js';
import { gameExport, gameWinner } from './gameExport.js';

class App {
  async play() {
    consoleResult('\n실행 결과');
    const gameProgress = await gameExport();
    consoleResult(gameProgress);

    const winner = await gameWinner();
    consoleResult(`최종 우승자 : ${winner}`);
  }
}

export default App;
