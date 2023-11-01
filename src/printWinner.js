import { Console } from '@woowacourse/mission-utils';

const printWinner = async function printWinnerWithResult(CAR_NAME, GO_COUNT) {
  const MAX_GO_COUNT = Math.max(...GO_COUNT);

  const WINNERS = CAR_NAME.filter((_, index) => {
    return GO_COUNT[index] === MAX_GO_COUNT;
  });

  Console.print(`최종 우승자 : ${WINNERS.join(', ')}`);
}

export default printWinner;
