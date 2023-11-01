import { NUMBER } from './number.js';

export const SYMBOLS = {
  nameDivider: ',',
  winnerDivider: ', ',
  colon: ' : ',
  move: '-',
  lineBreak: '\n',
};

export const MESSAGE = {
  askCarNames: `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)${SYMBOLS.lineBreak}`,
  askLapCount: `시도할 횟수는 몇 회인가요?${SYMBOLS.lineBreak}`,
  result: `${SYMBOLS.lineBreak}실행 결과`,
  winner: `최종 우승자`,
};

export const ERROR = {
  prefix: '[ERROR]',
  invalidNameLength: `${NUMBER.maxNameLength}글자 이내의 이름을 입력해주세요.`,
  invalidLapCount: '올바른 자연수를 입력해주세요.',
};
