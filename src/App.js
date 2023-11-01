import gameStart from "./game.js";

class App {
  async play() {
    await gameStart();
  }
}

export default App;
