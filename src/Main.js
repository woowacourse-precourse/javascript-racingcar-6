import { Console, Random } from '@woowacourse/mission-utils';
import { PRINT_MESSAGES } from './Message';
import { getCarName, getTryNum } from './Car';

export const progressOrStop = (car) => {
  if (Random.pickNumberInRange(0, 9) >= 4) {
    this.progress += PRINT_MESSAGES.FORWARD;
  }
  Console.print(PRINT_MESSAGES.PROGRESS_PROCESS(car.name, car.progress));
};

export const checkWinner = (carList) => {
  carList
    .sort((a, b) => b.progress.length - a.progress.length)
    .filter((el) => el.progress.length === carList[0].progress.length)
    .map((el) => el.name)
    .join(',');
};

export async function gameStart() {
  const carList = await getCarName();
  let tryNum = await getTryNum();
  Console.print(PRINT_MESSAGES.PROGRESS_RESULT);
  while (tryNum) {
    carList.map((el) => progressOrStop(el));
    Console.print('');
    tryNum -= 1;
  }
  Console.print(PRINT_MESSAGES.WINNER_LIST(checkWinner(carList)));
}
