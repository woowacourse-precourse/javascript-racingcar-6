import { ERROR_MESSAGES, CustomError } from './Error.js';

class Validation {
    static isPlayerCarNameValidated(carNames) {
        if(carNames.some(name => name.length > 5)) {
            throw new CustomError(
                'InvalidNameLength',
                ERROR_MESSAGES.INVALID_CARS_NAME_LENGTH,
            );
        }
        if (carNames.some(name => !/^[A-Za-z]+$/.test(name))) {
            throw new CustomError(
                'InvalidNameCharacter',
                ERROR_MESSAGES.INVALID_CARS_NAME_STRING, 
            );
        }

        const uniqueNames = new Set(carNames);
        if (uniqueNames.size !== carNames.length) {
            throw new CustomError(
                'InvalidNameDuplicate',
                ERROR_MESSAGES.INVALID_CARS_NAME_DUPLICATE,
            );
        }

        return true;   
    }

    static isPlayerTryNumberValidated(tryNumber) {
        if(Number.isNaN(Number(tryNumber))) {
            throw new CustomError(
                'InvalidTryNumber',
                ERROR_MESSAGES.INVALID_CARS_NAME_STRING,
            );
        }

        if(tryNumber < 1) {
            throw new CustomError(
                'InvalidTryNumber',
                ERROR_MESSAGES,INVALID_TRY_NUMBER_NEGATIVE,
            );
        }
        return true;
    }
}

export default Validation;