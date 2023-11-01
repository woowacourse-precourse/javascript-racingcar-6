import GameMain from "./modules/GameMain.js";

class App {
  async play() {
    const gameMain = new GameMain();
    await gameMain.userCarName();
  }
}

export default App;
