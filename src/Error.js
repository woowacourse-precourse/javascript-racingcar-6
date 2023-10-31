export class CustomError extends Error {
    constructor(name, message) {
        super(message);
        this.name = name;
    }
}

export const ERROR_MESSAGES = {
    INVALID_CARS_NAME_LENGTH:
        '[ERROR] 자도차의 이름은 5글자 이하로 입력해 주세요',
    INVALID_CARS_NAME_STRING:'[ERROR] 자동차 이름에는 영어만 사용할 수 있어요',
    INVALID_CARS_NAME_DUPLICATE: '[ERROR] 자동차의 이름은 중복될 수 없어요',
    INVALID_TRY_NUMBER_NEGATIVE: '[ERROR] 시도 횟수는 0보다 큰 정수입니다',
    INVALID_TRY_NUMBER_STRING: '[ERROR] 시도 횟수는 숫자만 입력해 주세요',
};