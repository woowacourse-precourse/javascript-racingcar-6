const ERROR_MESSAGE = {
  CAR: {
    EMPTY_NAME: '[ERROR] car 이름은 비워 둘 수 없습니다.',
    NAME_TOO_LONG: '[ERROR] car 이름은 5자 이하만 가능합니다.',
    DUPLICATE_NAME: '[ERROR] car 이름은 중복이 불가합니다.',
  },
  MOVECOUNT: {
    NOT_A_NUMBER: '[ERROR] 숫자를 입력해주세요.',
    NOT_AN_INTEGER: '[ERROR] 정수를 입력해주세요.',
    NEGATIVE_NUMBER: '[ERROR] 음수를 입력할 수 없습니다.',
    ZERO_NUMBER: '[ERROR] 1이상의 숫자를 입력해주세요.',
    EMPTY_COUNT: '[ERROR] 횟수를 비워둘 수 없습니다.',
  },
};

export default ERROR_MESSAGE;
