import startGame from './game/gameHandler.js';

class App {
  async play() {
    await startGame();
  }
}

export default App;
