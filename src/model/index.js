import { SYSTEM } from '../constants/System.js';
import RandomNumberGenerator from './RandomNumberGenerator.js';

class RacingCarModel {
  #carData;

  static canMove() {
    const randomNumber = RandomNumberGenerator.run();
    return randomNumber >= SYSTEM.moveStartPoint;
  }
}

export default RacingCarModel;
