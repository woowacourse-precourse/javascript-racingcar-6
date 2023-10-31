import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/messages.js';

const whoIsWinner = racingCars => {
  const scores = Object.values(racingCars);
  const cars = Object.keys(racingCars);

  let maxNumber = 0;
  let winner = '';

  scores.forEach((score, index) => {
    if (score.length > maxNumber) {
      winner = cars[index];
      maxNumber = score.length;
    } else if (score.length === maxNumber) {
      winner += `,${cars[index]}`;
    }
  });

  Console.print(`${MESSAGES.WINNER} ${winner}`);
};

export default whoIsWinner;
