import { Console } from '@woowacourse/mission-utils';

const OutputView = Object.freeze({
  printRaceResult() {
    return Console.print('\n실행 결과');
  },

  printRacingGrid(racingGrid) {
    racingGrid.forEach(({ name, status }) => Console.print(`${name} : ${'-'.repeat(status)}`));
    Console.print('');
  },
  printRaceWinner() {
    return Console.print('\n최종 우승자 : ');
  },
});

export default OutputView;
