import GameUi from "./game/GameUi.js";
class App {
  constructor() {
    this.gameUi = new GameUi();
  }
  async play() {
    this.gameUi.askCarName();
  }
}

export default App;
