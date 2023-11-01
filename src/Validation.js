import { ERROR_MESSAGE } from "./constants/ErrorMessage.js";

class Validation {
    static isCarNameValidate(carNameArray){
        const ENGLISH_CHECK = /^[a-zA-Z]*$/;
        
        if(carNameArray.some(name => name.length < 1 || name.length > 5)){
            throw new Error(ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH);
        };

        if(new Set(carNameArray).size !== carNameArray.length){
            throw new Error(ERROR_MESSAGE.INVALID_DUPLICATE_CAR_NAME);
        }

        if(carNameArray.some(name => !ENGLISH_CHECK.test(name))){
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