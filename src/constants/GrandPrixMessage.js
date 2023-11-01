import { SYMBOLS } from './Symbols.js';

export const GRANDPRIX_START_NOTIFICATION = Object.freeze({
  enterRacingCarName: `경주할 자동차의 이름을 입력하세요.(이름은 쉼표(${SYMBOLS.comma}) 기준으로 구분)\n`,
  enterLapNumber: '시도할 횟수는 몇 회 인가요?\n',
});

export const GRANDPRIX_RESULT_NOTIFICATION = Object.freeze({
  printLapResult: '실행 결과',
  printRacingGrid(name, status) {
    return `${name} : ${SYMBOLS.dash.repeat(status)}`;
  },
  printRaceWinner(nameList) {
    return `최종 우승자 : ${nameList}`;
  },
});
