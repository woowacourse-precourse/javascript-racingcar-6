import RacingGame from "./RacingGame.js";
import { playRaceRound, printWinners } from "./playRaceGame.js";

class App {
  async play() {
    const racingGame = new RacingGame();
    await racingGame.startGame();
    playRaceRound(racingGame);
    printWinners(racingGame);
  }
}

(() => {
  const app = new App();
  app.play();
})();
export default App;
