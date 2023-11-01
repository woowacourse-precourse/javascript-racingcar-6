import { Console } from '@woowacourse/mission-utils';
import { INFO_MESSAGE } from '../Util/message.js';

const printWinner = (carName) => {
  const carArr = Array.from(carName);
  const mx = carArr.reduce((maxValue, cur) => (maxValue > cur[1].length ? maxValue : cur[1].length), 0);
  const winnerArr = carArr.filter((value) => value[1].length === mx).map((value) => value[0]);
  Console.print(INFO_MESSAGE.winner(winnerArr));
};

export default printWinner;
