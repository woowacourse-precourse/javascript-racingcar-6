export const INPUT_MESSAGE = {
  CAR_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  MOVE_COUNT: '시도할 횟수는 몇 회인가요?\n',
};

export const OUTPUT_MESSAGE = {
  RESULT: '\n실행 결과',
  WINNERS: '최종 우승자 : ',
};

export const ERROR_MESSAGE = {
  INVALID_CAR_NAME_LENGTH:
    '[ERROR] 자동차 이름은 공백을 제외한 한 글자 이상 다섯 자 이하로 입력해 주세요.',
  DUPLICATED_CAR_NAME:
    '[ERROR] 중복된 자동차 이름이 있습니다. 각 자동차 이름은 고유해야 합니다.',
  INVALID_MOVE_COUNT: '[ERROR] 유효한 숫자(1 이상)를 입력해 주세요.',
  TOO_LARGE_MOVE_COUNT:
    '[ERROR] 1 이상 2147483647 이하의 숫자만 입력 가능합니다.',
};
