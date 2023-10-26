import { Console, Random } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES, PRINT_MESSAGES } from './Message.js';
import { getCarName, getTryNum } from './Car.js';

async function gameStart() {
  const carList = await getCarName();
  let tryNum = await getTryNum();
  Console.print(PRINT_MESSAGES.PROGRESS_RESULT);
  while (tryNum) {
    carList.map((el) => progressOrStop(el));
    Console.print('')
    tryNum--;
  }
  Console.print(PRINT_MESSAGES.WINNER_LIST(checkWinner(carList)));
}

const progressOrStop = (car) => {
  if (Random.pickNumberInRange(0, 9) >= 4) {
    car.progress += PRINT_MESSAGES.FORWARD;
  }
  Console.print(PRINT_MESSAGES.PROGRESS_PROCESS(car.name, car.progress));
};

const checkWinner = (carList) => {
  return carList
    .sort((a, b) => b.progress.length - a.progress.length)
    .filter((el) => el.progress.length === carList[0].progress.length)
    .map((el) => el.name)
    .join(',');
};

gameStart();
