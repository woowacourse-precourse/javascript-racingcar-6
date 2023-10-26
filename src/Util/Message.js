const GAME_MESSAGE = Object.freeze({
  START : '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
})

const ERROR_MESSAGE = Object.freeze({
  NAME_LENGTH : '[ERROR] 이름은 5자 이하만 가능합니다.',
  NAME_BLANK : '[ERROR] 이름은 공백이면 안됩니다.'
})

export { GAME_MESSAGE, ERROR_MESSAGE };