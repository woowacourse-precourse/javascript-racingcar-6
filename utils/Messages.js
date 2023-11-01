const PREFIX = '[ERROR]';

const MESSAGES = Object.freeze({
  nameQuery: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  trialQuery: '시도할 횟수는 몇 회인가요?\n',
  result: '실행 결과',
  progressBar: '-',
  lineBreak: '\n',
  resultDelimeter: ' : ',
  finalWinner: '최종 우승자 : ',
  winnerDelimeter: ', ',
  invalidNameLength: `${PREFIX}이름은 5글자 이하로 엽릭해주세요.`,
  invalidTrialCount: `${PREFIX}시도할 횟수를 1 이상의 양의 정수로 입력해주세요.`,
});

export default MESSAGES;
