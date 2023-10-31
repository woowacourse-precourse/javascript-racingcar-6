import CarRacingGame from './CarRacingGame.js';

class App {
  async play() {
    return new CarRacingGame().run();
  }
}

export default App;
