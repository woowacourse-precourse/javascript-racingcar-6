import { MissionUtils } from '@woowacourse/mission-utils';


const runRace = (totalRaces, participants) => {
  const raceResults = {};
  participants.forEach((participant) => {
    raceResults[participant] = '';
  })

  for (let race = 1; race < totalRaces + 1; race++) {
    participants.forEach((participant) => {
      if (determineWin()) {
        raceResults[participant] += '-';
      }
      MissionUtils.Console.print(`${participant} : ${raceResults[participant]}`);
    })

    MissionUtils.Console.print('\n');
  }

  const maxScore = findMaxScore(raceResults);
  const winnerNamesArray = findWinnerName(raceResults, maxScore);

  MissionUtils.Console.print(`최종 우승자 : ${winnerNamesArray.join(', ')}`);
}


const determineWin = () => {
  const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

  return randomNumber >= 4;
}


const findMaxScore = (raceResults) => {
  let maxScore = 0;

  for (const participant in raceResults) {
    const participantScore = raceResults[participant].length;
    if (participantScore >= maxScore) {
      maxScore = participantScore;
    }
  }

  return maxScore;
}


const findWinnerName = (raceResults, targetScore) => {
  const winnerNames = [];

  for (const participant in raceResults) {
    if (raceResults[participant].length === targetScore) {
      winnerNames.push(participant);
    }
  }
  return winnerNames;
}