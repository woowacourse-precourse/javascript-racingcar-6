import { Console, Random } from '@woowacourse/mission-utils';
import { INPUT_MESSAGES, PRINT_MESSAGES } from './Message.js';
import { getCarName, getTryNum } from './Car.js';

async function gameStart() {
  const carList = await getCarName();
  let tryNum = await getTryNum();
  while (tryNum) {
    carList.map((el) => progressOrStop(el));
    tryNum--
  }
}

const progressOrStop = (car) => {
  if (Random.pickNumberInRange(0, 9) >= 4) {
    car.progress += PRINT_MESSAGES.FORWARD;
  }
  Console.print(PRINT_MESSAGES.PROGRESS_PROCESS(car.name, car.progress));
};

gameStart();
