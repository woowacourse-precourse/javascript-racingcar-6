import MESSAGE from '../common/message.js';
import { print } from '../common/utils.js';

const winnerCalculate = (raceCars) => {
  const winners = [];
  let maximumDistance = 0;

  for (let i = 0; i < raceCars.length; i += 1) {
    if (maximumDistance < raceCars[i].distance) {
      maximumDistance = raceCars[i].distance;
    }
  }

  for (let i = 0; i < raceCars.length; i += 1) {
    if (maximumDistance === raceCars[i].distance)
      winners.push(raceCars[i].name);
  }

  print(MESSAGE.winner + winners.join(', '));
};

export default winnerCalculate;
