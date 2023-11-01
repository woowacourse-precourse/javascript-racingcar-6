import Race from './Race.js';
import InputManager from './InputManager.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  #race;

  async play() {
    const participants = await InputManager.inputParticipants();
    const tryCount = await InputManager.inputTryCount();

    this.#race = new Race(participants);

    Console.print('실행 결과');

    Array.from({ length: tryCount }).forEach(() => {
      this.#race.playRound();
      this.#race.printCurrentProcess();
    });

    this.#race.printResult();
  }
}

const app = new App();
app.play();

export default App;
