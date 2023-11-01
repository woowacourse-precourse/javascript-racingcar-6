export const ERROR_PREFIX = '[ERROR]';

export const MESSAGES = {
  raceNameInputMessage:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표 (,) 기준으로 구분)',
  raceCountInputMessage: '시도할 횟수는 몇 회인가요?',
  invalidNameErrorMessage: `${ERROR_PREFIX} 자동차 이름은 1자 이상 5자 이하만 가능합니다.`,
  invalidCountErrorMessage: `${ERROR_PREFIX} 숫자가 잘못된 형식입니다.`,
  duplicatedNameErrorMessage: `${ERROR_PREFIX} 중복된 이름을 입력할 수 없습니다.`,
};

export const STRINGS = {
  raceResult: '실행 결과',
  raceWinner: '최종 우승자',
  carMovingToken: '-',
};
