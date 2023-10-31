import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constant';

const findWhoIsWinner = (calcuratedScoreBoard) => {
  const winner = [];

  calcuratedScoreBoard.forEach((car, index) => {
    const winnerLastIndex = winner[winner.length - 1]?.score.length;
    if (index === 0) {
      winner.push(car);
      return;
    }

    if (car.score.length > winnerLastIndex) {
      winner.length = 0;
      winner.push(car);
      return;
    }
    if (car.score.length === winnerLastIndex) {
      winner.push(car);
    }
  });

  return winner;
};

const printGameResult = (calcuratedScoreBoard) => {
  const winner = findWhoIsWinner(calcuratedScoreBoard);
  const winningString = winner.reduce(
    (acc, cur) => `${acc}${cur.name}, `,
    MESSAGE.finalWinner
  );

  Console.print(winningString.substring(0, winningString.length - 2));
};

export { printGameResult, findWhoIsWinner };
