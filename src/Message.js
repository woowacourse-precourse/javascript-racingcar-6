export const GameText = Object.freeze({
  GET_CAR_NAME:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  GET_GAME_ATTEMPTS: '시도할 횟수는 몇 회인가요?',
  END_MESSAGE: '게임을 종료합니다',
});

export const ErrorMessage = Object.freeze({
  CAR_NAME_LENGTH: '[ERROR] 자동차 이름은 5글자까지 가능합니다.',
  ATTEMPTS_VALID_NUM: '[ERROR] 실행 횟수는 1 이상의 정수로만 입력 가능합니다.',
  ATTEMPTS_TYPE: '[ERROR] 샐행 횟수는 숫자만 입력할 수 있습니다.',
});
