import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/message.js';

const getWinner = racerMap => {
  let maxDistance = 0;
  let winner = [];
  racerMap.forEach((distance, racer) => {
    if (distance > maxDistance) {
      maxDistance = distance;
      winner = [racer];
    } else if (distance === maxDistance) {
      winner.push(racer);
    }
  });
  return winner;
};
const printWinner = winner => {
  if (winner.length === 1) {
    Console.print(`${MESSAGE.winnerMessage}${winner[0]}`);
  } else {
    Console.print(`${MESSAGE.winnerMessage}${winner.join(', ')}`);
  }
};
const gameResult = racerMap => {
  const winner = getWinner(racerMap);
  printWinner(winner);
};

export default gameResult;
