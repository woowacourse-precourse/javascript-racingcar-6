import { MissionUtils } from '@woowacourse/mission-utils';

function findAndPrintWinner(carNamesArray, raceResults) {
  const winCarNamesArray = findWinner(carNamesArray, raceResults);
  printWinner(winCarNamesArray);
}

function findWinner(carNamesArray, raceResults) {
  const carProgressCountArray = raceResults.map((progress) => progress.length);
  const maxProgress = Math.max(...carProgressCountArray);
  const winCarNamesArray = [];

  carProgressCountArray.forEach((progress, index) => {
    if (progress === maxProgress) {
      winCarNamesArray.push(carNamesArray[index]);
    }
  });
  return winCarNamesArray;
}

function printWinner(winCarNamesArray) {
  const winCarNamesString = winCarNamesArray.join(', ');

  MissionUtils.Console.print(`최종 우승자 : ${winCarNamesString}`);
}

export default findAndPrintWinner;
