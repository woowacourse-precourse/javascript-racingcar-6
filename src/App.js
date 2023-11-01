import startGame from './controller/GameController.js';

class App {
  async play() {
    await startGame();
  }
}

export default App;
