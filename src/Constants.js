// 자동차이름 및 전진횟수
export const CARS = [];

// 사용자가 값을 입력할 때 메시지
export const INPUT_MESSAGE = {
  INPUT_CAR_NAMES:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  INPUT_ATTEMPT_COUNT: '시도할 횟수는 몇 회인가요?\n',
};

// 출력 메시지
export const OUTPUT_MESSAGE = {
  RESULT_GUIDE_MESSAGE: '실행 결과\n',
  WINNER(winner) {
    return `최종우승자 : ${winner}`;
  },
  EACHRACE(CAR_NAME, CAR_FORWARD_NUMBER) {
    const FORWARDED = `${'-'.repeat(CAR_FORWARD_NUMBER)}`;
    return `${CAR_NAME} : ${FORWARDED}`;
  },
};

// 에러 메시지
export const ERROR_MESSAGE = {
  NO_COMMA: '[ERROR] ,가 없거나 하나의 차만 입력하셨습니다.',
  NO_INPUT: '[ERROR] 값을 입력하지 않으셨습니다.',
  NO_INPUT_AFTER_COMMA: '[ERROR] 쉼표 뒤에 아무 것도 입력하지 않으셨습니다.',
  EXCEED_FIVE_CHARACTORS: '[ERROR] 차 이름은 5자를 초과해서 입력할 수 없습니다.',
  DUPLICATE_CAR_NAME: '[ERROR] 차 이름이 중복되었습니다.',
  NO_NUMBER: '[ERROR] 숫자를 입력하지 않으셨습니다.',
  NOT_POSITIVE_INTEGER: '[ERROR] 1 이상의 양의 정수를 입력하세요.'
};
