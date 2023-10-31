const LOGS = {
  INPUT_PROMPT1: `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`,
  INPUT_PROMPT2: `시도할 횟수는 몇 회인가요?\n`,
  INVALID_INPUT1: '[ERROR] 이름은 한 글자 이상 다섯 글자이하로 작성해주세요',
  INVALID_INPUT2: '[ERROR] 중복되는 이름이 존재합니다',
  INVALID_INPUT3: '[ERROR] 숫자가 잘못된 형식입니다.',
  NEW_LINE: '',
  RUN_PROMPT: '실행 결과',
  winnerPrompt: winners => `최종 우승자 : ${winners.join(', ')}`,
  progressPrompt: (name, progress) => `${name} : ${progress}`,
};

export default LOGS;
