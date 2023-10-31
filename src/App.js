import RaceGame from './RaceGame.js';

class App {
  async play() {
    const raceGame = new RaceGame();
    await raceGame.racingStart();
  }
}

export default App;
