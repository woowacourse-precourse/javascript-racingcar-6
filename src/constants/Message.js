export const MESSAGE_NOTIFICATION = Object.freeze({
  playerCarName: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  playerInput: '시도할 횟수는 몇 회인가요?\n',
  startResult: '\n실행 결과',
  racingResult: '\n최종 우승자 : ',
});

const ERROR_PREFIX = '[ERROR]';

export const MESSAGE_ERROR = Object.freeze({
  errorIsNumber: `${ERROR_PREFIX} 숫자만 입력해주세요.`,
  errorCarNameLength: `${ERROR_PREFIX} 자동차 이름은 5자 이하만 가능합니다.`,
  errorCarNameDuplicate: `${ERROR_PREFIX} 중복된 이름이 존재합니다.`,
  errorCarNotValid: `${ERROR_PREFIX} 유효하지 않은 이름입니다.`,
});
