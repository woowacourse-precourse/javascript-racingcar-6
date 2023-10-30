export const VALIDATE_CAR_NAME = (CAR_NAME_INPUT) => {
    if (!CAR_NAME_INPUT) {
        throw new Error(CAR_NAME_NULL_ERROR_MESSAGE);
    }
    const CAR_NAMES = INPUT.split(',');
    if (CAR_NAMES.some(CAR_NAME => CAR_NAME.trim().length > 5)) {
        throw new Error(CAR_NAME_INVALID_ERROR_MESSAGE);
    }
}