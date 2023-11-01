export const INPUT_MESSAGE_FUNCTION = Object.freeze({
  name(vehicle) {
    return `경주할 ${vehicle} 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`;
  },
});

export const OUTPUT_MESSAGE = {
  count: '\n시도할 횟수는 몇 회인가요?\n',
  blink: '',
  progress: '\n실행 결과',
};

export const OUTPUT_MESSAGE_FUNCTION = Object.freeze({
  finalWinner(finalWinner) {
    return `최종 우승자 : ${finalWinner.join(', ')}`;
  },
});

export const ERROR_MESSAGE = Object.freeze({
  prefix: '[ERROR]',
  duplication: '중복되는 이름은 사용할 수 없습니다.',
});

export const ERROR_MESSAGE_FUNCTION = Object.freeze({
  delimiterError(delimiter) {
    return `올바른 구분자가 아닙니다. ${delimiter} 구분자를 사용해 주세요`;
  },
  nameLength(min, max) {
    return `이름의 길이는 ${min}자 ~ ${max}자사이 여야 합니다.`;
  },
  language(languageOption) {
    const languages = Object.keys(languageOption);
    return `다음의 언어만 사용할 수 있습니다. ${languages.join('')}`;
  },
  quantity(min, max) {
    return `자동차 대수는 ${min}대부터 ${max}까지 가능합니다.`;
  },
  racingCount(min, max) {
    return `레이싱 횟수는 ${min}~${max}사이의 숫자만 가능합니다.`;
  },
  randomNumber(min, max) {
    return `생성된 숫자가 ${min}~${max}사이가 아닙니다. 인수 또는 패키지를 확인해 주세요`;
  },
});
