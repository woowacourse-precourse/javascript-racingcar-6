import { RULE } from './Rule';

const ERROR_MESSAGE_HEADER = Object.freeze('[ERROR]');

const MESSAGE = Object.freeze({
  inputName: `경주할 자동차 이름을 입력하세요.(이름은 쉼표(${RULE.delimiter}) 기준으로 구분)`,
  inputRound: `시도할 횟수는 몇 회인가요? 횟수는 ${RULE.round.min}이상의 숫자만 가능합니다.`,
  delimiterError: `${ERROR_MESSAGE_HEADER} 잘못된 형식입니다. "${RULE.delimiter}"를 사용해 이름을 구분해주세요.`,
  nameError: `${ERROR_MESSAGE_HEADER} 잘못된 형식입니다. 이름은 ${RULE.name.max}자 이하의 문자만 가능합니다.`,
  roundError: `${ERROR_MESSAGE_HEADER} 잘못된 형식입니다.`,
  movement: '-',
  gameResult: '실행 결과',
  winner: '최종 우승자 : ',
});

export { MESSAGE };
