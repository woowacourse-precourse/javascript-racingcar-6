import { gameStart } from './Main';

export default class App {
  static play() {
    gameStart();
  }
}

const app = new App();
app.play();
