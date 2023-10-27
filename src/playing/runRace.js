import { MissionUtils } from '@woowacourse/mission-utils';


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