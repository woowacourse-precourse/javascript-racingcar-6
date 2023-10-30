export const INPUT_MESSAGE = Object.freeze({
  PLAYER_CARS: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
});

export const OUTPUT_MESSAGE = {};

export const ERROR_MESSAGE = Object.freeze({
  LOWERCASE: '[ERROR] 차 이름은 소문자영어로만 이뤄져야합니다.',
  LENFIVE: '[ERROR] 차 이름은 5글자 이하여야만 합니다.',
  UNIQUE: '[ERROR] 차 이름은 중복될 수 없습니다.'
})