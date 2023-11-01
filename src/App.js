import Controller from './controller/controller';

class App {
  #Controller;

  constructor() {
    this.#Controller = new Controller();
  }
  async play() {
    await this.#Controller.start();
  }
}

export default App;
