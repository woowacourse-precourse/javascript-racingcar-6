// 자동차이름 및 전진횟수
export const CARS = [];

// 사용자가 값을 입력할 때 메시지
export const INPUT_MESSAGE = {
  inputCarNames:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  inputAttemptCount: '시도할 횟수는 몇 회인가요?\n',
};

// 출력 메시지
export const OUTPUT_MESSAGE = {
  initMessageWelcome: '\n****레이싱 게임에 오신 것을 환영합니다!****',
  initMessageGuide: '경주할 자동차들과 레이싱게임을 시도할 횟수를 입력해주시면 결과를 보여드립니다!\n',
  resultGuideMessage: '실행 결과\n',
  winner(winner) {
    return `최종우승자 : ${winner}`;
  },
  eachRace(carName, carForwardNumber) {
    const forwarded = `${'-'.repeat(carForwardNumber)}`;
    return `${carName} : ${forwarded}`;
  },
};

// 에러 메시지
export const ERROR_MESSAGE = {
  noComma: '[ERROR] ,가 없거나 하나의 차만 입력하셨습니다.',
  noInput: '[ERROR] 값을 입력하지 않으셨습니다.',
  noInputAfterComma: '[ERROR] 쉼표 뒤에 아무 것도 입력하지 않으셨습니다.',
  exceedFiveCharacters:
    '[ERROR] 차 이름은 5자를 초과해서 입력할 수 없습니다.',
  duplicateCarName: '[ERROR] 차 이름이 중복되었습니다.',
  noNumber: '[ERROR] 숫자를 입력하지 않으셨습니다.',
  notPositiveInteger: '[ERROR] 1 이상의 양의 정수를 입력하세요.',
};
