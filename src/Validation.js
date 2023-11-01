INVALID_CAR_NAME_LENGTH: '[ERROR] 자동차 이름을 5글자 이하로 입력하세요',
INVALID_DUPLICATE_CAR_NAME: '[ERROR] 중복된 자동차 이름이 존재합니다.',
INVALID_CAR_NAME: '[ERROR] 자동차 이름은 영어 문자만 가능합니다.',
INVALID_NUMBER_SIZE: '[ERROR] 시도 횟수는 1 이상의 숫자만 가능합니다.',
INVALID_NOT_A_NUMBER: '[ERROR] 숫자만 입력 가능합니다.',

class Validation {
    static isCarNameValidate(carNameAray){
        const ENGLISH_CHECK = /^[a-zA-Z]*$/;
        
        if(carNameArray.some(name => name.length < 1 || name.length > 5)){
            throw new Error(ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH);
        };

        if(new Set(carNameArray).size !== carNameArray.length){
            throw new Error(ERROR_MESSAGE.INVALID_DUPLICATE_CAR_NAME);
        }

        if(carNameAray.some(name => !ENGLISH_CHECK.test(name))){
            throw new Error(ERROR_MESSAGE.INVALID_CAR_NAME);
        }

        return true;
    }

    static isRoundValidate(round){
        const MIN_VALUE = 0;
        if(Number(round) < MIN_VALUE){
            throw new Error(ERROR_MESSAGE.INVALID_NUMBER_SIZE);
        }

        if(isNaN(Number(round))){
            throw new Error(ERROR_MESSAGE.INVALID_NOT_A_NUMBER);
        }

        return true;
    }
}

export default Validation;