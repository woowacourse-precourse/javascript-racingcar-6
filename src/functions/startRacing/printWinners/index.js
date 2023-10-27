import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../../../constants/message';

const printWinners = (winners) => {
  const winnersStr = winners.join(', ');
  Console.print(`${MESSAGE.noticeWinner} : ${winnersStr}`);
};

export default printWinners;
