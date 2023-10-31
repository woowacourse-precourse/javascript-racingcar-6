const OUTPUT_MSG = {
    INPUT_VEHICLE_NAME : '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    INPUT_PLAY_TIME : '시도할 횟수는 몇 회인가요?',
    WINNER_IS : '최종 우승자 :',
};

const ERROR_MSG = {
    USER_NAME_LENGTH_ERROR : '[ERROR] 사용자 이름은 5자 이하만 가능합니다.',
    USER_NAME_REGAX_ERROR : '[ERROR] 사용자 이름에 특수문자 및 공백은 사용할 수 없습니다.',
    PLAY_TIME_ERROR : '[ERROR] 잘못된 시도 횟수를 입력하셨습니다.',
    PLAY_TIME_REGAX_ERROR : '[ERROR] 특수문자 및 공백은 사용할 수 없습니다.',
    PLAY_TIME_NOT_NULL_ERROR : '[ERROR] 시도 횟수를 입력해주세요.',
    PLAY_TIME_NOT_ZERO_ERROR : '[ERROR] 시도 횟수는 0보다 큰 값을 입력해주세요.',
    NAME_DUPLICATION_ERROR : '[ERROR] 자동차 이름이 중복되었습니다.'
};

module.exports = { OUTPUT_MSG , ERROR_MSG }