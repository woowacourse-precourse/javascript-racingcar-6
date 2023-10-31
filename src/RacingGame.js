import InputManager from './InputManager.js';

class RacingGame {
  async playRacing() {
    const inputManager = new InputManager();
    inputManager.getCarNames();
  }
}

export default RacingGame;
