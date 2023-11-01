import {
  LIMIT,
  MINIMUM_NUMBER_OF_PEOPLE,
  MINIMUM_TRY_ROUND,
} from './racingRule.js';

export const ERROR_MESSAGE = {
  PLAY: {
    MORE_ROUND_THAN_ALLOWED:
      '[ERROR] 입력받은 round 횟수만큼 게임을 진행했습니다. 결과를 확인해주세요',
    LEFT_ROUND: '[ERROR] 게임 round가 전부 실행되지 않았습니다.',
  },
  USER_INPUT: {
    CAR_NAMES: {
      NOT_HAVE_COMMA: '자동차 이름은 (,)로 구분해 입력해 주세요 !',
      HAVE_SPACING: '자동차 이름에 공백을 넣지 말아주세요 !',
      NOT_ENOUGH_PEOPLE: `게임에 필요한 인원은 최소 ${MINIMUM_NUMBER_OF_PEOPLE}명 이상입니다 !`,
      NOT_ENOUGH_NAME_LENGTH:
        '각 유저의 이름은 최소한 1글자 이상으로 입력해 주세요 !',
      OVER_NAME_LENGTH:
        '각 이름의 길이가 5 이상인 이름이 있어요 ! 각각의 자동차 이름의 길이는 5이하로 입력해 주세요 !',
      INVALID_NAME_FORM: '자동차이름은 숫자, 영문, 한글만으로 만들어 주세요 !',
      OVER_PERSONNEL: `한 게임에 입장 가능 인원은 ${LIMIT.PERSONNEL}명입니다 !`,
      IS_DUPLICATE_NAME: '중복된 자동차 이름은 허용하지 않습니다 !',
      IS_UPPER_AND_LOWERCASE_DUPLICATE:
        '대소문자를 입력할 수는 있지만 같은 문자일 경우 동일한 이름으로 간주합니다 ! 중복을 피해주세요',
    },
    TRY_ROUND: {
      IS_NOT_NUMBER_TYPE: '시도할 횟수는 숫자만 입력해 주세요 !',
      HAVE_SPACING: '시도할 횟수에 공백이 들어있습니다. 숫자만 입력해 주세요 !',
      LACK_TRY_ROUND: `시도할 횟수는 최소한 ${MINIMUM_TRY_ROUND}이상이여야 합니다 !`,
      INCLUDE_FIRST_INDEX_ZERO: '앞자리의 불필요한 0 은 빼주세요 !',
      INCLUDE_MATH_SIGN: '부호를 제외한 정수만 입력해주세요 !',
      INVALID_TRY_ROUND_RANGE: `${LIMIT.TRY_ROUND_RANGE.MIN}~${LIMIT.TRY_ROUND_RANGE.MAX} 사이의 숫자만 입력해주세요`,
    },
  },
  VIEW: {
    UNEXPECTED_RESPONSE: '[ERROR] 예기치 못한 입력이 들어왔습니다',
    REASON: (response, errorMessage) =>
      `${response} 라는 값이 들어와 \n${errorMessage} 라는 이유로 게임을 종료합니다 T_T`,
  },
};
