import { VALIDATION, GAME } from './constants';

export const INPUT_MESSAGE = Object.freeze({
  carName: `경주할 자동차 이름을 입력하세요.(이름은 쉼표(${GAME.splitDelimiter}) 기준으로 구분)`,
  round: '시도할 횟수는 몇 회인가요?',
});

export const OUTPUT_MESSAGE = Object.freeze({
  result: '실행 결과',
  winner: '최종 우승자',
  carPosition: '-',
});

export const ERROR_MESSAGE = Object.freeze({
  invalidCarName: `자동차 이름은 공백이 아닌 ${VALIDATION.carName.minLength}~${VALIDATION.carName.maxLength}자리만 가능합니다.`,
  duplicateCarName: '중복된 자동차 이름이 존재합니다.',
  invalidTrycount: '시도 횟수는 숫자만 가능합니다.',
});
