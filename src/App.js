import GameMain from "./modules/gameMain.js";

class App {
  async play() {
    this.gameMain = new GameMain();
    return this.gameMain.userCarName();
  }
}

export default App;
