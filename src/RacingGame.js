import { Console } from '@woowacourse/mission-utils';
import InputManager from './InputManager.js';

class RacingGame {
  async playRacing() {
    const inputManager = new InputManager();
    const carNameList = await this.getCarNameList(inputManager);
    Console.print(carNameList);
  }

  async getCarNameList(inputManager) {
    return inputManager.enterCarNameList();
  }
}

export default RacingGame;
