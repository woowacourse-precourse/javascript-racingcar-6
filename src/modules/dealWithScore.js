import { MissionUtils } from '@woowacourse/mission-utils';

export const startRound = function startRoundAndCalculateScore(
  namesArray,
  scoreObject
) {
  namesArray.forEach(carName => {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    scoreObject[`${carName}`] += randomNumber >= 4 ? 1 : 0;
  });
};

export const getRoundResult = function returnRoundResultInSpecificFormat(
  namesArray,
  scoreObject
) {
  return namesArray.map(car => {
    const scoreCount = '-'.repeat(scoreObject[`${car}`]);
    return `${car} : ${scoreCount}`;
  });
};

export const getWinners = function getFinalWinnersInArray(
  namesArray,
  scoreObject
) {
  let winners = [namesArray[0]];

  for (let i = 0; i < namesArray.length - 1; i++) {
    const oneCar = winners[0];
    const oneScore = scoreObject[`${oneCar}`];
    const anotherCar = namesArray[i + 1];
    const anotherScore = scoreObject[`${anotherCar}`];

    winners = anotherScore > oneScore ? [anotherCar] : winners;
    winners = oneScore === anotherScore ? [...winners, anotherCar] : winners;
  }

  return winners;
};
