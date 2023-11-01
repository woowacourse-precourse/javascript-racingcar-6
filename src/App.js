import Race from './racingcar/race.js';
import RacingStateService from './services/racing.state.service.js';

class App {
  #racingState;

  constructor() {
    this.#racingState = new RacingStateService();
  }

  async play() {
    const race = new Race(this.#racingState);
    await race.start();
  }
}

export default App;
