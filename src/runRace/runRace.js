import { Console, Random } from '@woowacourse/mission-utils';

const getRandomMove = () => Random.pickNumberInRange(0, 9);

const getRandomProgress = () => (getRandomMove() >= 4 ? '-' : '');

const runRace = (cars, tryCount) => {
  const progressList = new Array(cars.length).fill('');

  for (let countNumber = 0; countNumber < tryCount; countNumber += 1) {
    cars.forEach((car, carIndex) => {
      progressList[carIndex] += getRandomProgress();
      Console.print(`${car} : ${progressList[carIndex]}`);
    });
    Console.print('');
  }
};

export default runRace;
