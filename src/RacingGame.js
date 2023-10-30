import { calculateMoveCntFromRandomNumber } from './utils.js';

const RacingGame = (carArr, tryNum) => {
  while (tryNum--) {
    calculateMoveCntFromRandomNumber(carArr);
  }
};

export default RacingGame;
