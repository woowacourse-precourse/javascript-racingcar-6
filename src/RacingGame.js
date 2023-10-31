import InputManager from './InputManager.js';

class RacingGame {
  playRacing() {
    const inputManager = new InputManager();
    inputManager.getCarNames();
  }
}

export default RacingGame;
