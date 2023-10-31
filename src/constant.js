export const ERROR_PREFIX = '[ERROR]';

export const ERROR = {
  participant: `${ERROR_PREFIX} 참가자 입력값을 확인하세요.`,
  repeatNumber: `${ERROR_PREFIX} 시도할 횟수 입력값을 확인하세요.`,
};

export const MESSAGE = {
  progressResult: (name, progress) => `${name} : ${progress}`,
  progressDivider: '',
  progressIcon: '-',
  winnerResult: (winner) => `최종 우승자 : ${winner}`,
  winnerDivider: ', ',
};

export const PROMPT = {
  joinList: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  repeatNumber: '시도할 횟수는 몇 회인가요?\n',
};

export const RULE = {
  maxNameLength: 5,
};
