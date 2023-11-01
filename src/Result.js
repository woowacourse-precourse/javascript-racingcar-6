import { Console } from '@woowacourse/mission-utils';

class Result {
  determineWinner(carDictionary) {
    let maxScore = 0;
    let winners = [];

    Object.entries(carDictionary).forEach(([key, value]) => {
      if (value > maxScore) {
        maxScore = value;
        winners = [key];
      } else if (value === maxScore) {
        winners.push(key);
      }
    });

    return winners;
  }

  printWinner(winners) {
    Console.print(
      '최종 우승자 : ' + winners.join(', ').trim().replace(/\n|\r/g, ''),
    );
  }
}

export default Result;
