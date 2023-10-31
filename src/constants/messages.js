import { GAME_CONDITION } from './constants.js';

const MESSAGE = Object.freeze({
  carsNameInputGuide: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  roundInputGuide: '시도할 횟수는 몇 회인가요?\n',
  playResult: '\n실행 결과',
  finalWinner: '최종 우승자 : ',
  uniqueName: '[ERROR] 중복되는 이름이 존재합니다.',
  lengthName: `[ERROR] 이름은 ${GAME_CONDITION.minLength}글자 이상 ${GAME_CONDITION.maxLength}자 이하여야 합니다.`,
  minCars: `[ERROR] 최소 ${GAME_CONDITION.minCars}개 이상의 이름이 필요합니다.`,
  minRound: `[ERROR] 최소 ${GAME_CONDITION.minRound}이상의 숫자여야 합니다.`,
  commaSpace: ', ',
  progress: '-',
});

export { MESSAGE };
