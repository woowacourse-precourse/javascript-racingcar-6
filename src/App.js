import RaceGame from "./controller/RaceGame.js";

class App {
  async play() {
    await RaceGame();
  }
}

export default App;
