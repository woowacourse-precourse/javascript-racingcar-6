import RacingCarService from './RacingCar.service.js';

class App {
  #racingCarService;

  constructor() {
    this.#racingCarService = new RacingCarService();
  }

  async play() {
    await this.#racingCarService.racingCarQuery();
  }
}

export default App;
