const { startGame } = require('./playing/startGame');

class App {
  async play() {
    await startGame();
  }
}

export default App;