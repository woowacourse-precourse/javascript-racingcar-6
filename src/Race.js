import Car from './Car';

export const VALIDATE_CAR_NAME = (CAR_NAME_INPUT) => {
    if (!CAR_NAME_INPUT) {
        throw new Error(CAR_NAME_NULL_ERROR_MESSAGE);
    }
    const CAR_NAMES = INPUT.split(',');
    if (CAR_NAMES.some(CAR_NAME => CAR_NAME.trim().length > 5)) {
        throw new Error(CAR_NAME_INVALID_ERROR_MESSAGE);
    }
}

export const CREATE_CARS = (CAR_NAMES) => {
    if (CAR_NAMES.length < 1) {
        throw new Error(CREATE_CAR_ERROR_MESSAGE);
    }
    return CAR_NAMES.map(CAR_NAME => new Car(CAR_NAME));
}

export const VALIDATE_RACE_TIME = (RACE_TIME_INPUT) =>  {
    const RACE_TIME = parseInt(RACE_TIME_INPUT, 10);
    if (isNaN(RACE_TIME) || RACE_TIME <= 0) {
      throw new Error(RACE_TIME_ERROR_MESSAGE);
    }
    return RACE_TIME;
}