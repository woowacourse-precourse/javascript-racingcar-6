export const GAME_MESSEAGE = Object.freeze({
  inputName : '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  inputAttempt : '시도할 횟수는 몆 회인가요?',
  executeResult : '실행 결과',
  winner : '최종 우승자',
});

export const ERROR_MESSEAGE = Object.freeze({
  nameLength : '[ERROR] 자동차 이름은 최대 5글자까지 가능합니다.',
  nameSingle : '[ERROR] 게임을 시작하기 위해선 2대 이상의 자동차가 필요합니다.',
  commaMisuse : '[ERROR] 쉼표(,)의 사용이 잘못되었습니다.',
  attempt : '[ERROR] 올바른 숫자 형식이 아닙니다.',
  attemptZero : '[ERROR] 게임을 시작하기 위해선 최소 1회 이상의 시도 횟수가 필요합니다.',
  nameDuplication : '[ERROR] 중복된 자동차 이름이 포함되어 있습니다.',
});
