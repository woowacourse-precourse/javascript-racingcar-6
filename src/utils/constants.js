const FORWARD_CONDITION_NUM = 4;

const INPUT_MSG = Object.freeze({
  INPUT_CAR_NAMES:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분합니다.)\n',
  INPUT_TRY_COUNT: '시도할 횟수는 몇회인가요?\n',
});

const OUTPUT_MSG = Object.freeze({
  RESULT: '실행 결과',
  WINNERS: winners => `${winners}(이)가 최종 우승했습니다.`,
});

const ERROR_MSG = Object.freeze({
  CAR_NAME_LENGTH: '[ERROR] 자동차 이름은 5자 이하만 가능합니다.',
  CAR_NAME_DUPLICATE: '[ERROR] 자동차 이름은 중복될 수 없습니다.',
  TRY_COUNT: '[ERROR] 시도 횟수는 1 이상의 자연수를 입력해야 합니다.',
});

export { FORWARD_CONDITION_NUM, INPUT_MSG, OUTPUT_MSG, ERROR_MSG };
