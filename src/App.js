import View from './View/View.js';

class App {
  #view = new View();

  async play() {
    const carNames = await this.#view.readCarName();
    const round = await this.#view.readRound();

    this.#view.print(`carNames: ${carNames}, round: ${round}`);
  }
}

const app = new App();
app.play();

export default App;
