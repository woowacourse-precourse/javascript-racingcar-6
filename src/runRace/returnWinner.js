import { Console } from '@woowacourse/mission-utils';

const maxProgress = (progressList) => Math.max(...progressList.map((progress) => progress.length));

const findWinners = (cars, progressList) =>
  cars.filter((car, carIndex) => progressList[carIndex].length === maxProgress(progressList));

const returnWinners = (cars, progressList) =>
  Console.print(`최종 우승자 : ${findWinners(cars, progressList).join(' ')}`);

export default returnWinners;
