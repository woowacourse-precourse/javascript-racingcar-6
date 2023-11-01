import { MissionUtils } from '@woowacourse/mission-utils';

function findTopCounter(racecarNames) {
  let top = 0;

  racecarNames.forEach((data, idx) => {
    if (top < data.count) {
      top = data.count;
    }
  });

  return top;
}

function findWinners(racecarNames, top) {
  const winners = racecarNames
    .filter((data) => data.count === top)
    .map((data) => data.name);
  return winners;
}

function displayWinner(gameData) {
  const racecarNames = gameData.getRacecarNames();
  const topCount = findTopCounter(racecarNames);
  const winners = findWinners(racecarNames, topCount);

  MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
}

export { displayWinner };
