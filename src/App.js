import View from './View/View.js';

class App {
  #view = new View();

  async play() {
    const userInput = await this.#view.readCarName();

    this.#view.print(userInput);
  }
}

const app = new App();
app.play();

export default App;
