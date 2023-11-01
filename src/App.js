import GameManager from "./GameManager.js";

class App {
  async play() {
    const gameManager = new GameManager();
    await gameManager.play();
  }
}

export default App;
