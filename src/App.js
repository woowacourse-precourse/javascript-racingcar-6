import { gameStart } from './Main.js';

export default class App {
  async play() {
    await gameStart();
  }
}
