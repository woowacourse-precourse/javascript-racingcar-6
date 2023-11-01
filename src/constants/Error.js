const ERROR = Object.freeze({
  PREFIX: '[ERROR] ',
  TRY_AGAIN: ' 다시 입력해주세요.',

  NON_EXIST: '입력값이 존재하지 않습니다.',
  ONLY_ONE: '자동차 이름은 최소 2개 이상 입력해야 합니다.',
  GAP: '공백이 포함되어 있습니다.',
  LENGTH: '이름은 5자까지만 입력 가능합니다.',
  DUPLICATE: '자동차의 이름은 중복이 불가능합니다.',

  NOT_NUMBER: '시도 횟수는 숫자만 입력 가능합니다.',
  NOT_NATURAL_NUMBER: '시도 횟수는 자연수만 입력 가능합니다.',
});

export default ERROR;
