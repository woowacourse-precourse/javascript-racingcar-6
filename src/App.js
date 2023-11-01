import GameMain from "./modules/gameMain.js";

class App {
  constructor() {
    this.gameMain = new GameMain();
  }

  async play() {
    return this.gameMain.userCarName();
  }
}

const app = new App();
app.play();

export default App;
