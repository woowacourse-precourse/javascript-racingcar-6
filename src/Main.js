import { Console, Random } from '@woowacourse/mission-utils';
import { PRINT_MESSAGES, GAME_RULE_NUMBER } from './Constants.js';
import { getCarNameList, getTryNum } from './Car.js';

export const progressOrStop = (car) => {
  if (
    Random.pickNumberInRange(GAME_RULE_NUMBER.min, GAME_RULE_NUMBER.max) >=
    GAME_RULE_NUMBER.threshold
  ) {
    car.progress.push(PRINT_MESSAGES.forward);
  }
  Console.print(
    PRINT_MESSAGES.progressProcess(car.name, car.progress.join('')),
  );
};

export const checkWinner = (carList) => {
  const winnerList = carList
    .sort((a, b) => b.progress.length - a.progress.length)
    .filter((el) => el.progress.length === carList[0].progress.length)
    .map((el) => el.name)
    .join(',');
  Console.print(PRINT_MESSAGES.winnerList(winnerList));
};

const gameTry = (carNameList, tryNum) => {
  let tries = tryNum;
  while (tries) {
    tries -= 1;
    carNameList.map((car) => progressOrStop(car));
    Console.print('');
  }
};

export async function gameStart() {
  const carNameList = await getCarNameList();
  const tryNum = await getTryNum();
  Console.print(PRINT_MESSAGES.progressResult);
  gameTry(carNameList, tryNum);
  checkWinner(carNameList);
}
