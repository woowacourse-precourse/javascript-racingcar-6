import RacingCarController from './controller/RacingCarController';

class App {
  #racingCarController

  constructor(){
    this.#racingCarController = new RacingCarController();
  }

  async play() {
    await this.#racingCarController.start();
  }
}

const app = new App();
app.play();

export default App;
