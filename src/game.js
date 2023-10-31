import { Console, Random } from '@woowacourse/mission-utils';
import { MOVE_NUMBER } from '../constants/setting.js';
import { MESSAGE } from '../constants/message.js';

const isMove = () => {
  const random = Random.pickNumberInRange(0, 9);
  if (random >= MOVE_NUMBER) return true;
  return false;
};
const printRoundResult = racerMap => {
  racerMap.forEach((score, racer) => {
    Console.print(`${racer} : ${'-'.repeat(score)}`);
  });
  Console.print('');
};
const race = racerMap => {
  racerMap.forEach(async (score, racer) => {
    if (isMove()) racerMap.set(racer, score + 1);
  });
};
const game = async (racerMap, round) => {
  Console.print(MESSAGE.resultMessage);
  for (let i = 0; i < round; i += 1) {
    race(racerMap);
    printRoundResult(racerMap);
  }
};
export default game;
