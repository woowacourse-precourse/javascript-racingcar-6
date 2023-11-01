import RacingCarController from './RacingCarController.js';

class App {
  async play() {
    await new RacingCarController().play();
  }
}

export default App;
