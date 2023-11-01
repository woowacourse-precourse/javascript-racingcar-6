import ConductGame from "./controller/ConductGame";

class App {
  #conductGame;
  async play() {
    this.#conductGame = await ConductGame();
    this.#conductGame.repeatOrderGoToCar();
    this.#conductGame.showWhoWinner();
  }
}

export default App;
