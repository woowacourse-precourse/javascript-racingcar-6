import { Console, Random } from '@woowacourse/mission-utils';
import returnWinners from './returnWinner.js';

const getRandomMove = () => Random.pickNumberInRange(0, 9);

const getRandomProgress = () => (getRandomMove() >= 4 ? '-' : '');

const printCarProgress = (car, progressList, carIndex) =>
  Console.print(`${car} : ${progressList[carIndex]}`);

const runRace = (cars, tryCount) => {
  const progressList = new Array(cars.length).fill('');

  for (let tryNumber = 0; tryNumber < tryCount; tryNumber += 1) {
    cars.forEach((car, carIndex) => {
      progressList[carIndex] += getRandomProgress();
      printCarProgress(car, progressList, carIndex);
    });

    Console.print('');
  }

  returnWinners(cars, progressList);
};

export default runRace;
