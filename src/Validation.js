import { ERROR_MESSAGES, CustomError } from './Errors.js';

export const isPlayerCarNameValidated = raceEntry => {
    if (raceEntry.some(name => name.length > 5)) {
        throw new CustomError(
            'InvalidNameError',
            ERROR_MESSAGES.INVALID_CARS_NAME_LENGTH,
        );
    }

    if (raceEntry.some(name => !/^[A-Za-z]+$/.test(name))) {
        throw new CustomError(
            'InvalidNameCharacter',
            ERROR_MESSAGES.INVALID_CARS_NAME_STRING, 
        );
    }
    const uniqueNames = new Set(raceEntry);
    if(uniqueNames.size !== raceEntry.length) {
        throw new CustomError(
            'InvalidNameDuplicate',
            ERROR_MESSAGE.INVALID_CARS_NAME_DUPLICATE,
        );
    }
    return true;

};

export const isPlayerTryNumberValidated = tryNumber => {
    if(isNaN(Number(tryNumber))) {
        throw new CustomError(
            'InvalidTryNumber',
            ERROR_MESSAGES.INVALID_TRY_NUMBER_STRING,
        );
    }
    if (tryNumber < 1) {
        throw new CustomError(
            'InvalidTryNumber',
            ERROR_MESSAGES.INVALID_TRY_NUMBER,NEGATIVE,
        );
    }
    return true;
};