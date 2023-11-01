import GrandPrix from './controller/GrandPrix.js';

export default class App {
  #grandPrix;

  async play() {
    this.#grandPrix = new GrandPrix();
    await this.#grandPrix.initialize();
  }
}
