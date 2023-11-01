import Race from './Race.js';
import InputManager from './InputManager.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  #race;

  async play() {
    const participants = await InputManager.inputParticipants();
    const tryCount = await InputManager.inputTryCount();

    this.#race = new Race(participants);
  }
}

const app = new App();
app.play();

export default App;
