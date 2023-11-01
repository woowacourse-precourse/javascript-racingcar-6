export const MESSAGE = {
  getCarName: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  getPlayNum: '시도할 횟수는 몇 회인가요?',
  printResult: '실행 결과',
  printWinner: '최종 우승자 : ',
};

export const ERROR_MESSAGE = {
  carName: {
    tooLong: '[ERROR] 자동차 이름이 깁니다. 5자 이하로 입력해주세요.',
    noname:
      '[ERROR] 이름이 없는 자동차가 있습니다. 모든 자동차에 이름을 붙여주세요.',
    duplicate: '[ERROR] 중복된 이름이 있습니다. 중복되지 않게 입력해주세요.',
    noInput: '[ERROR] 입력을 하지 않았습니다. 자동차의 이름을 입력해주세요.',
  },
  playNum: {
    includeStr: '[ERROR] 문자가 포함되었습니다. 1이상의 숫자만 입력해주세요.',
    includeZero: '[ERROR] 0을 입력했습니다. 1이상의 숫자를 입력해주세요.',
    noInput: '[ERROR] 0을 입력했습니다. 1이상의 숫자를 입력해주세요.',
  },
};
