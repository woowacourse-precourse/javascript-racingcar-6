import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/constants.js';

const printRaceWinner = (raceResult) => {
  const winners = [];
  const maxLength = Math.max(
    ...Object.values(raceResult).map((path) => path.length)
  );

  Object.entries(raceResult).forEach(([car, path]) => {
    if (path.length === maxLength) {
      winners.push(car);
    }
  });

  Console.print(`${MESSAGE.OUTPUT_WINNER} : ${winners.join(', ')}`);
};

export default printRaceWinner;
