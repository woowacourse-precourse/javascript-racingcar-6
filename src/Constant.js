export const INPUT_MESSAGE = {
    CAR_NAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    GAME_ROUND: '시도할 횟수는 몇 회인가요?',
};

export const VALIDATION_RULE = {
    MIN_NAME_LENGTH_INCLUSIVE: 1,
    MAX_NAME_LENGTH_INCLUSIVE: 5,
    MIN_GAME_ROUND_INCLUSIVE: 1,
    MIN_GROUP_SIZE_INCLUSIVE: 2,
};

export const GAME_RULE = {
    MIN_RANDOM_NUM_INCLUSIVE: 0,
    MAX_RANDOM_NUM_INCLUSIVE: 9,
    MIN_NUM_TO_PROGRESS: 4,
};

const _ERROR_HEAD = '[ERROR]';
export const ERROR_MESSAGE = {
    UNIQUE_CONSTRAINT_VIOLATED: `${_ERROR_HEAD} 중복 사항이 발견되었어요.`,
    INVALID_NAME_LENGTH: `${_ERROR_HEAD} 이름은 ${VALIDATION_RULE.MIN_NAME_LENGTH_INCLUSIVE}부터 ${VALIDATION_RULE.MAX_NAME_LENGTH_INCLUSIVE} 사이의 길이로 입력해주세요.`,
    NOT_AN_INT: `${_ERROR_HEAD} 0으로 시작하지 않는 정수값으로 다시 입력해주세요.`,
    INVALID_GAME_ROUND: `${_ERROR_HEAD} 시도할 횟수는 ${VALIDATION_RULE.MIN_GAME_ROUND_INCLUSIVE} 이상의 값을 입력해주세요.`,
    INVALID_GROUP_SIZE: `${_ERROR_HEAD} 최소한 ${VALIDATION_RULE.MIN_GROUP_SIZE_INCLUSIVE}개의 이름을 제공해주어야 해요.`,
    UNKNOWN_ERROR: `${_ERROR_HEAD} 알 수 없는 오류가 발생했어요.`,
};
