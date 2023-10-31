import { SYSTEM } from '../constants/System.js';
import RandomNumberGenerator from './RandomNumberGenerator.js';

class RacingModel {
  static canMove() {
    const randomNumber = RandomNumberGenerator.run();
    return randomNumber >= SYSTEM.canMoveNumber;
  }
}

export default RacingModel;
