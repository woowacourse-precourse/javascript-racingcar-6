import RaceGame from "./controller/RaceGame.js";

class App {
  async play() {
    const raceGame = new RaceGame();
    await raceGame.startGame();
  }
}

export default App;
