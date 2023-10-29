const MissionUtils = require('@woowacourse/mission-utils');


const determineMove = () => {
  const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

  return randomNumber >= 4;
}


const findMaxScore = (raceResults) => {
  let maxScore = 0;

  Object.keys(raceResults).forEach((participant) => {
    const participantScore = raceResults[participant].length;
    if (participantScore >= maxScore) {
      maxScore = participantScore;
    }
  });

  return maxScore;
}

const updateRaceResults = (participants, raceResults) => {
  participants.forEach((participant) => {
    if (determineMove()) {
      raceResults[participant] += '-';
    }
    MissionUtils.Console.print(`${participant} : ${raceResults[participant]}\n`);
  });
};


const findWinnerName = (raceResults, targetScore) => {
  const winnerNames = [];

  Object.keys(raceResults).forEach((participant) => {
    if (raceResults[participant].length === targetScore) {
      winnerNames.push(participant);
    }
  });

  return winnerNames;
}


const runRace = (totalRaces, participants) => {
  const raceResults = {};
  participants.forEach((participant) => {
    raceResults[participant] = '';
  })

  for (let race = 1; race < totalRaces + 1; race += 1) {
    updateRaceResults(participants, raceResults);
    MissionUtils.Console.print('\n');
  }

  const maxScore = findMaxScore(raceResults);
  const winnerNamesArray = findWinnerName(raceResults, maxScore);

  MissionUtils.Console.print(`최종 우승자 : ${winnerNamesArray.join(', ')}\n`);
}


module.exports = { runRace };