export const CAR_NAME_LENGTH = 5;
export const MIN_NUMBER = 0;
export const MAX_NUMBER = 9;
export const MOVABLE_NUMBER = 4;
export const STEP_SHAPE = '-';

export const INPUT_MESSAGE = Object.freeze({
  carNames: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  tryNumber: '시도할 횟수는 몇 회인가요?\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  result: '실행 결과',
  winners: '최종 우승자 : ',
});

export const ERROR_MESSAGE = Object.freeze({
  length: `[ERROR] 자동차 이름은 ${CAR_NAME_LENGTH}자 이하여야 합니다.`,
  blank: '[ERROR] 공백의 이름을 입력했습니다.',
  duplication: '[ERROR] 동일한 이름을 중복하여 입력했습니다.',
  numberType: '[ERROR] 숫자 형식으로만 입력해야 합니다.',
  integerType: '[ERROR] 양의 정수만 입력해야 합니다.',
});
