import InputManager from './InputManager.js';

class App {
  async play() {
    const participants = await InputManager.inputParticipants();
    const tryCount = await InputManager.inputTryCount();
  }
}

const app = new App();
app.play();

export default App;
