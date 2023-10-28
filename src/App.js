import RacingCarController from './RacingCarController';

class App {
  async play() {
    await new RacingCarController.play();
  }
}

export default App;
