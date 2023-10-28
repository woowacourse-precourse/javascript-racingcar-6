import { Console, Random } from '@woowacourse/mission-utils';
import { PRINT_MESSAGES } from './Message.js';
import { getCarName, getTryNum } from './Car.js';

export const progressOrStop = (car) => {
  if (Random.pickNumberInRange(0, 9) >= 4) {
    car.progress.push(PRINT_MESSAGES.FORWARD);
  }
  Console.print(
    PRINT_MESSAGES.PROGRESS_PROCESS(car.name, car.progress.join(''))
  );
};

export const checkWinner = (carList) => {
  return carList
    .sort((a, b) => b.progress.length - a.progress.length)
    .filter((el) => el.progress.length === carList[0].progress.length)
    .map((el) => el.name)
    .join(',');
};

export async function gameStart() {
  const carNameList = await getCarName();
  let tryNum = await getTryNum();
  Console.print(PRINT_MESSAGES.PROGRESS_RESULT);
  while (tryNum) {
    carNameList.forEach((car) => progressOrStop(car));
    Console.print('');
    tryNum -= 1;
  }
  Console.print(PRINT_MESSAGES.WINNER_LIST(checkWinner(carNameList)));
}
