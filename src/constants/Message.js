import { RULE } from './Rule.js';

const ERROR_MESSAGE_HEADER = Object.freeze('[ERROR] 잘못된 형식입니다.');

const BLANK = ' ';

const FORMAT_MESSAGE = Object.freeze({
  delimiter: `자동자는 쉼표(${RULE.delimiter}) 기준으로 구분해주세요.`,
  name: `이름은 ${RULE.name.min} ~ ${RULE.name.max}개의 숫자,영문,한글만 가능합니다.`,
  numberOfCar: `경주에 참여하는 자동차는 ${RULE.numberOfCar.min}개 이상 ${RULE.numberOfCar.max}개 이하여야 합니다.`,
  round: `횟수는 ${RULE.round.min}이상 ${RULE.round.max}의 숫자만 가능합니다.`,
});

const MESSAGE = Object.freeze({
  inputName: `경주할 자동차 이름을 입력하세요.\n${FORMAT_MESSAGE.numberOfCar}\n${FORMAT_MESSAGE.delimiter}\n${FORMAT_MESSAGE.name}`,
  inputRound: `시도할 횟수는 몇 회인가요? \n${FORMAT_MESSAGE.round}`,
  movement: '-',
  gameResult: '실행 결과',
  winner: '최종 우승자 : ',
});

const ERROR_MESSAGE = Object.freeze({
  delimiterError: FORMAT_MESSAGE.delimiter,
  numberOfCar: FORMAT_MESSAGE.numberOfCar,
  nameError: FORMAT_MESSAGE.name,
  roundError: FORMAT_MESSAGE.round,
});
export { BLANK, ERROR_MESSAGE, ERROR_MESSAGE_HEADER, MESSAGE };
